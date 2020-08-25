import * as yup from 'yup';

const formSchema = yup.object().shape({
  url: yup
    .string()
    .min(5, 'url must be at least 5 characters long')
    .required('url is required'),
});

export default formSchema;