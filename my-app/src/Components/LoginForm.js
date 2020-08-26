import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

//need  email, password and a submit button
const formSchema = yup.object().shape({
    email: yup
        .string()
        .email("Must be a valid e-mail address.")
        .required("Must include an e-mail address."),
    password: yup
    .string()
    .required("Must include a password."),
   
});
export default function Form(){
    const [formState, setFormState] = useState ({
        email: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(true);
    useEffect(()=> {
        formSchema.isValid(formState).then(valid=>{
            setButtonDisabled(!valid);
        });
    }, [formState]);
    const [errorState, setErrorState] = useState({
        email: "",
        password: "",
      
    });
    const [users, setUsers] = useState([]);
    
    const formSubmit = e => {
        e.preventDefault();
        console.log("Form Submitted!");
        axios
        .post("", formState)
        .then(response => {
            console.log(response);
            setUsers([...users, response.data]);
            setFormState({email:"",password:""});
        })
        .catch(err => console.log(err))
    }; 
return(
    <div id="container">
    <StyleForm onSubmit={formSubmit}>
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
    </StyleForm>

    </div>
)
};


const StyleForm = styled.form`
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
color:darkgreen;
font-size:2rem;
font-weight:bold;
label{
    padding: 10px 0px;
}
input{
   margin-left: 20px;
}
button{
    margin: 10px 0px;
    color:seagreen;
    border-color:darkgreen;
    background:lightgreen;
    padding:10px;
    border-radius:30px;
    font-size:20px;

    :hover{
        background:pink;
        color:hotpink;
        border-color:hotpink;
    }
}
input:focus{
    background:lightsalmon;
}
`;
