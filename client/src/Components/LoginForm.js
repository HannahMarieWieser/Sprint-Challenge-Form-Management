import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from "formik";
import axios from 'axios';
import * as Yup from 'yup';


// - [x] A registration form built with formik -
    // include inputs for a `username` and a `password`
// - [x] Form validation using Yup
// - [ ] At least one class component (I would challenge you to make the form a class!)
// - [x] A POST request made from the registration form to `http://localhost:5000/api/register` to add a user - the request body should have the following shape:
/*
```js
{
    username: "Your name",
    password: "password"
}
```

and the response object will look like this:
```js
{
    "error": "false",
    "message": "User created successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTYzNDc2NTc0LCJleHAiOjE1NjM0ODAxNzR9.pIkjFgRRbrrg8j38YGiWpMlw0wgTWRfZmIIMAeFLQcw"
}
*/

const LoginForm = ({values, errors, handleSubmit, touched, status})=>{
    const [login, setLogin] = useState([])
    console.log('login state', login)

    useEffect(() => {
        if (status){
            setLogin([...login, status])
        }
    }, [status]);

    return(
        <Form>
            <div>
                {touched.username && errors.username && <p>{errors.username}</p>}
                <Field type = 'text' name='username' placeholder= 'Username'/>
            </div>

            <div>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type = 'password' name='password' placeholder= 'Password'/>
            </div>
            <button type= 'submit'>Submit!</button>
        </Form>
    )
}


const Onboard = withFormik({
    mapPropsToValues({username, password}){
        return{
            username: username || '',
            password: password || '',
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
        .required('Username is required'),

        password: Yup.string()
        .min(6, 'Password must be 6 characters or longer')
        .matches(/[0-9]/, 'Needs at least one number')
        .matches(/[~*.,&^%$#@!()><?/]/, 'Needs at least one special character')
        .required('Password is required'),
    }),


    handleSubmit(values, {resetForm, setErrors, setSubmitting, setStatus}){
        console.log(values)
        
        axios
        .post('http://localhost:5000/api/register', values)
        .then(res =>{
            console.log('res', res)//console log response
            resetForm();
            setSubmitting(false)
            setStatus(res.data)
        })

        .catch(err =>{
            console.log('err', err)//console log error
            setSubmitting(false)
        })

        
        
    }


})(LoginForm);

export default Onboard;














