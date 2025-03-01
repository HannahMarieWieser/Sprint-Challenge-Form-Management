# Sprint Challenge: Form Management

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored class components and lifecycle methods, advanced form management, and unit testing.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your team lead and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in advanced React techniques.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager.

## Description

In the challenge for this Sprint, you will demonstrate proficiency by creating an application that has a registration page and let's you register a new user. Once a user is registered, you can fetch data and render it to the DOM.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [x] What are the required parts of class components?

    The required parts of class components are `extends React.Component`, `constructr()`, `super()`, `this.state` if being used, and  `render()`.

- [x] Name at least three lifecycle methods?

    Three main lifecyle methods are `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

- [x] Why are forms used so often in web applications and software?

    Forms are so commonly used because they are a way to add/store data with a database, especially large quantities of data that need to be acessed later. The also alow the engineer to easily edit, display and otherwise maniupate their desired data.

- [x] What advantages are there by using a forms library like Formik?

    Libraries such as Formik allow for the data of the form to be easily handled. They take care of nested form data and arrays, validation, error messages, and state. Some libraries, like Formik, work well with other libraries that have validation and other tools.

- [x] Why do we write tests for our apps?
    
    Tests are written for our apps because they minimize bugs otherwise not caught. They make programmer think about edge cases, encourage better code, prevent stagnation/regression and are a saftey when refactoring code. They are also automated, which makes them scalable and RESTful, in a way. 

## Project Set Up

Follow these steps to set up and work on your project:

- [x] Create a forked copy of this project.
- [x] Add PM as collaborator on Github.
- [x] Clone your OWN version of Repo. **(Not Lambda's by mistake!)**
- [x] Create a new Branch locally: `git checkout -b <firstName-lastName>`.

- [x] Implement the project on this Branch, **committing progress & changes often.**
- [x] Push commits: `git push origin <firstName-lastName>`.
- [x] Navigate to the BE folder in this repository (this is where your server is located) from the command line, install the dependencies, and run `yarn start` or `npm start` to spin up the server provided for you.
- [x] In the terminal, navigate back to the main folder, then into the `client` folder.
- [x] Create your React app here.

Follow these steps for completing your project:

- [x] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repo).
- [x] Add your Project Manager as a Reviewer on the Pull-request.
- [x] PM then will count the HW as done by merging the branch back into master.

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [x] A registration form built with formik - include inputs for a `username` and a `password`
- [x] Form validation using Yup
- [x] At least one class component (I would challenge you to make the form a class!)
- [x] Tests for at least one element, one event, and one unit test for a function
- [x] A POST request made from the registration form to `http://localhost:5000/api/register` to add a user - the request body should have the following shape:

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
```

- [x] A GET request made to `http://localhost:5000/api/restricted/data` to retrieve the data

- [x] Map over the array of objects you recieve and render some or all of it's information to the DOM.

## Stretch Problems

1. Styling! Make your form pretty. Research pseudo elements and event selectors. Try to find interesting ways to present and layout the data you recieve from the back end.

1. Make a Login form. Reuse your Formik form in such a way that it can be extracted into a component and reused for both Register and Login.

1. Add React Router to your app and build routes for the registration form
