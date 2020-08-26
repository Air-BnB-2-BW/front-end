import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import Users from '../Components/Users'


//need name, email, password, terms of service checkbox and a submit button
const formSchema = yup.object().shape({
    name: yup
    .string()
    .min(5, "Name must be atleast 5 characters long.")
    .required("Name is a required field."),
    email: yup
        .string()
        .email("Must be a valid e-mail address.")
        .required("Must include an e-mail address."),
    password: yup
    .string()
    .min(8, "Password must be atleast 8 characters long.")
    .required("Must include a password."),
    terms: yup
    .boolean()
    .oneOf([true],"Please agree to the Terms of Service.")
    .required("You must read and agree to the Tearms and Conditions.")
});
export default function SignupForm(){
    const [signupformState, setSignupFormState] = useState ({
        name: "",
        email: "",
        password: "",
        terms:false
    });
    const [signupbuttonDisabled, setSignupButtonDisabled] = useState(true);
    useEffect(()=> {
        formSchema.isValid(signupformState).then(valid=>{
            setSignupButtonDisabled(!valid);
        });
    }, [signupformState]);
    const [signuperrorState, setSignupErrorState] = useState({
        name:"",
        email: "",
        password: "",
        terms: ""
    });
    const [signupusers, setSignupUsers] = useState([]);
    const validate = e => {
        let value = 
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
            yup
            .reach(formSchema, e.target.name)
            .validate(value)
            .then(valid => {
                setSignupErrorState({
                    ...signuperrorState,
                    [e.target.name]: ""
                });
            })
            .catch(err => {
                setSignupErrorState({
                    ...signuperrorState,
                    [e.target.name]: err.errors[0]
                });
            });
    };
    const inputChange = e => {
        e.persist();
        validate(e);
        let value = 
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setSignupFormState({...signupformState, [e.target.name]: value});
    };
    const signupformSubmit = e => {
        e.preventDefault();
        console.log("Form Submitted!");
        axios
        .post("like2learn-airbnb-api.herokuapp.com/creatnewuser", signupformState)
        .then(response => {
            console.log(response);
            setSignupUsers([...signupusers, response.data]);
            setSignupFormState({name:"",email:"",password:"",terms:false});
        })
        .catch(err => console.log(err))
    }; 

    
return(
    <div id="container" className= "signupcont">
    <form onSubmit={signupformSubmit} className= "signup">
        <label htmlFor="name">
            Name:
            <input
                type="text"
                name="name"
                id="name"
                value={signupformState.name}
                onChange={inputChange}
                />
                {signuperrorState.name.length > 0 ? (
                    <p className="error">{signuperrorState.name}</p>
                ):null}
        </label>
        <label htmlFor="email">
          Email:
            <input
                type="email"
                name="email"
                id="email"
                value={signupformState.email}
                onChange={inputChange}
                />
                {signuperrorState.email.length > 0 ? (
                    <p className="error">{signuperrorState.email}</p>
                ):null}
        </label>
        <label htmlFor="password">
          Password:
            <input 
                type="password"
                name="password"
                id="password"
                value={signupformState.password}
                onChange={inputChange}
                />
                {signuperrorState.password.length > 0 ? (
                    <p className="error">{signuperrorState.password}</p>
                ):null}
        </label>
        <label htmlFor="terms">
            <input 
            type="checkbox"
            id="terms"
            name="terms"
            checked={signupformState.terms}
            onChange={inputChange}
            />
           <span id="fakelink"> Terms of Service</span>
           {signuperrorState.terms.length > 0 ? (
               <p className="error">{signuperrorState.terms}</p>
           ):null}
        </label>
        <button id="submit" disabled={signupbuttonDisabled}>Submit</button>
    </form>


    <Users props={signupusers}/>
    </div>
)
};

