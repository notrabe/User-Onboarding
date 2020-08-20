import * as yup from 'yup'

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(1, 'Your name must be at least 1 character long')
    .required('Please enter a name'),
  email: yup
    .string()
    .email(3, 'Username must be at least 3 characters long')
    .required('Must include email address'),
  password: yup
    .string()
    .min(8, 'Your password must be at least 8 characters.')
    .required('Password is required'),

})

export default formSchema
