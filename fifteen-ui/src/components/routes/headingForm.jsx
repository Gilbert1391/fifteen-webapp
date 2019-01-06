import React, { Component } from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import Input from "../common/input";
import { getHeading, saveHeading } from "../../service/dataService";

class HeadingForm extends Component {
  state = {
    data: {
      heading: "",
      subHeading: ""
    },
    errors: {}
  };

  async componentDidMount() {
    const { data: heading } = await getHeading();
    const data = heading[0];

    this.setState({
      data: {
        _id: data._id,
        heading: data.heading,
        subHeading: data.subHeading
      }
    });
  }

  schema = {
    _id: Joi.string(),
    heading: Joi.string()
      .min(5)
      .max(50)
      .label("Heading")
      .required(),
    subHeading: Joi.string()
      .allow("")
      .min(5)
      .max(50)
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);

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
    console.log(errors);
    if (errors) return;

    this.doSubmit();
  };

  doSubmit = async () => {
    await saveHeading(this.state.data);
    this.props.history.push("/");
  };

  handleChange = ({ currentTarget: target }) => {
    const data = { ...this.state.data };
    data[target.name] = target.value;

    this.setState({ data });
  };

  render() {
    const { data, errors } = this.state;

    return (
      <section>
        <div className="logo logo--dark ">
          <Link to="/" className="logo__heading">
            Fifteen
          </Link>
        </div>
        <form className="form" onSubmit={this.handleSubmit}>
          <Input
            name={"heading"}
            label={"Heading *"}
            value={data.heading}
            error={errors.heading}
            onChange={this.handleChange}
          />
          <Input
            name={"subHeading"}
            label={"Sub heading"}
            value={data.subHeading}
            error={errors.subHeading}
            onChange={this.handleChange}
          />
          <div className="form__group">
            <button className="btn">Save</button>
          </div>
        </form>
      </section>
    );
  }
}

export default HeadingForm;
