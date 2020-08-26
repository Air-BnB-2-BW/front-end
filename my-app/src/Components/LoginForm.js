import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';



//need  email, password and a submit button
const formSchema = yup.object().shape({
    email: yup
        .string()
        .email("Must be a valid e-mail address.")
        .required("Must include an e-mail address."),
    password: yup
    .string()
    .min(8, "Password must be 8 chracters long.")
    .required("Must include a password."),
   
});
 export default function LoginForm(){
    const [formState, setFormState] = useState ({
        email: "",
        password: ""
    });
    const [buttonDisabled, setButtonDisabled] = useState(true);
    useEffect(()=> {
        formSchema.isValid(formState).then(valid=>{
            setButtonDisabled(!valid);
        });
    }, [formState]);
    const [errorState, setErrorState] = useState({
        email: "",
        password: ""
      
    });
    const [users, setUsers] = useState([]);
    const validate = e => {
        let value = e.target.value;
            yup
            .reach(formSchema, e.target.name)
            .validate(value)
            .then(valid => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: ""
                });
            })
            .catch(err => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: err.errors[0]
                });
            });
    };

    const inputChange = e => {
        e.persist();
        validate(e);
        let value = e.target.value;
        setFormState({...formState, [e.target.name]: value});
    };
    
    const formSubmit = e => {
        e.preventDefault();
        console.log("Form Submitted!");
        axios
        .post("like2learn-airbnb-api.herokuapp.com/login", formState)
        .then(response => {
            console.log(response);
            setUsers([...users, response.data]);
            setFormState({email:"",password:""});
        })
        .catch(err => console.log(err))
   }; 
 return(
    <div id="logincontainer" className= "logincointainer">
    <form onSubmit={formSubmit} className= "loginform">
        <label htmlFor="email">
          Email: 
            <input
                type="email"
                name="email"
                id="email"
                value={formState.email}
                onChange={inputChange}
                />
                {errorState.email.length > 0 ? (
                    <p className="error">{errorState.email}</p>
                ):null}
        </label>
        <label htmlFor="password">
          Password:
            <input 
                type="password"
                name="password"
                id="password"
                value={formState.password}
                onChange={inputChange}
                />
                {errorState.password.length > 0 ? (
                    <p className="error">{errorState.password}</p>
                ):null}
        </label>
        <button id="submit" disabled={buttonDisabled}>Submit</button>
    </form>

    </div>
 )
};

