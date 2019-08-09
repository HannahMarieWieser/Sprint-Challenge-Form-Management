import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from "formik";
import axios from 'axios';
import * as Yup from 'yup';

// - [ ] A registration form built with formik -
    // include inputs for a `username` and a `password`
// - [ ] Form validation using Yup
// - [x] At least one class component (I would challenge you to make the form a class!)
// - [ ] A POST request made from the registration form to `http://localhost:5000/api/register` to add a user - the request body should have the following shape:
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

class LoginForm extends React.Component{
    constructor(){
        super();
        this.state={
            formdata:[]
        };
    }

    componentDidMount(){
        this.userData()
    }

    userData = (values, {resetForm, setErrors, setSubmitting, setStatus}) => {
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

    const OnForm = withFormik({
        mapPropsToValues({name, password}){
            return{
                name: name || '',           
                password: password || '',
            };
        },

        validationSchema: Yup.object().shape({
            name: Yup.string()
            .required('Full name is required')
            .matches(/[ ]/,'Please enter first and last name'),

            password: Yup.string()
            .min(6, 'Password must be 6 characters or longer')
            .matches(/[0-9]/, 'Needs at least one number')
            .matches(/[~*.,&^%$#@!()><?/]/, 'Needs at least one special character')
            .required('Password is required'),
        }),

    })

    render(){
    <Form>
            <div>
                {touched.name && errors.name && <p>{errors.name}</p>}
                <Field type = 'text' name='name' placeholder= 'Firstname Lastname'/>
            </div>

            <div>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type = 'password' name='password' placeholder= 'Password'/>
            </div>
        </Form>



    }














}