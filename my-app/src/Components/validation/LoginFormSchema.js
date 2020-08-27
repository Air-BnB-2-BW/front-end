import * as yup from "yup";

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
  
  export default formSchema;