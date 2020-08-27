import * as yup from "yup";

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
  birthdate: yup
  .string()
  .min(6, "Birthdate must be in the format MM/DD/YYYY.")
  .required("Must include a birthdate."),
  terms: yup
  .boolean()
  .oneOf([true],"Please agree to the Terms of Service.")
  .required("You must read and agree to the Tearms and Conditions.")
});
  
  export default formSchema;