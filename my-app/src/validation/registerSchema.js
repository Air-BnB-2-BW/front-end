import * as yup from 'yup'; 

const registerSchema = yup.object().shape({
    username: yup
    .string()
    .min(5, 'username must be at least 5 characters long')
    .required('username is required'), 
    password: yup
    .string()
    .min(6, 'password must be 6 characters long')
    .required('paddword is required')
})

export default registerSchema; 