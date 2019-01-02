import React, { Component } from "react";
import Joi from "joi-browser";

class LoginForm extends Component {
  state = {
    login: {
      username: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    name: {
      username: Joi.string()
        .max(50)
        .label("Username")
        .required(),
      password: Joi.string()
        .max(50)
        .label("Password")
        .required()
    }
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.login, this.schema, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) return;

    // Call server
    console.log("Submitted");
  };

  handleChange = ({ currentTarget: target }) => {
    const login = { ...this.state.login };
    login[target.name] = target.value;
    this.setState({ login });
  };

  render() {
    const { contact, errors } = this.state;

    return <div className="center">Login Form</div>;
  }
}

export default LoginForm;
