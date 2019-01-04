import React, { Component } from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import Input from "../common/input";

class LoginForm extends Component {
  state = {
    login: {
      username: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .max(50)
      .label("Username")
      .required(),
    password: Joi.string()
      .max(50)
      .label("Password")
      .required()
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
    this.doSubmit();
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  handleChange = ({ currentTarget: target }) => {
    const login = { ...this.state.login };
    login[target.name] = target.value;
    this.setState({ login });
  };

  render() {
    const { login, errors } = this.state;

    return (
      <section>
        <div className="logo logo--dark ">
          <Link to="/" className="logo__heading">
            Fifteen
          </Link>
        </div>
        <form className="form" onSubmit={this.handleSubmit}>
          <Input
            name={"username"}
            label={"Username"}
            value={login.username}
            error={errors.username}
            onChange={this.handleChange}
          />
          <Input
            type={"password"}
            name={"password"}
            label={"Password"}
            value={login.password}
            error={errors.password}
            onChange={this.handleChange}
          />
          <div className="form__group">
            <button className="btn">Login</button>
          </div>
        </form>
      </section>
    );
  }
}

export default LoginForm;
