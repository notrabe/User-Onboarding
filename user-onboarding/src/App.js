import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Form';
import formSchema from './formSchema';
import axios from 'axios';
import * as yup from 'yup';
import User from './User';

const initialFormValues = {
  name:'',
  email:'',
  password:'',
  termsOfService: {
    tos: false,
  },
}

const initialFormErrors = {
  name:'',
  email:'',
  password:'',
}

const initialUsers = []
const initialDisabled = true

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setButtonDisabled] = useState(initialDisabled)

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        debugger
      })
}

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([...users, res.data])
      })
      .catch(err => {
        debugger
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]:'',
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]:err.errors[0]
        })
      })

      setFormValues({
        ...formValues,
        [name]:value
      })
  }

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
      termsOfService: {
        ...formValues.termsOfService,
        [name]:isChecked,
      }
    })
  }

  const submit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      termsOfService:Object.keys(formValues.termsOfService).filter(tos =>
        formValues.termsOfService[tos]),
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setButtonDisabled(!valid);
      })
  }, [formValues])



  return (
    <div className="App">
      <Form
        values = {formValues}
        inputChange={inputChange}
        checkboxChange={checkboxChange}
        submit={submit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        users.map(user => {
          return (
            <User details = {user}/>
          )
        })
      }
    </div>
  );
}

export default App;
