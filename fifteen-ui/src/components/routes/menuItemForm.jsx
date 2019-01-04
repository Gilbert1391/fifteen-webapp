import React, { Component } from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import { getItem, saveItem } from "../../service/dataService";
import Input from "../common/input";
import TextArea from "../common/textArea";
import SelectInput from "../selectInput";

class MenuItemForm extends Component {
  state = {
    data: {
      title: "",
      category: "",
      price: "",
      description: ""
    },
    errors: {}
  };

  async componentDidMount() {
    const itemId = this.props.match.params.id;
    if (itemId === "new") return;

    try {
      const { data: item } = await getItem(itemId);
      this.setState({
        data: {
          _id: item._id,
          title: item.title,
          category: item.category,
          price: item.price,
          description: item.description
        }
      });
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found");
      }
    }
  }

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .min(5)
      .max(50)
      .label("Title")
      .required(),
    category: Joi.string()
      .max(50)
      .label("Category")
      .required(),
    price: Joi.number()
      .min(0)
      .max(100)
      .label("Price")
      .required(),
    description: Joi.string()
      .min(5)
      .max(100)
      .label("Description")
      .required()
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
    if (errors) return;

    // Call server
    this.doSubmit();
  };

  doSubmit = async () => {
    console.log("Submitted");
    await saveItem(this.state.data);
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
            name={"title"}
            label={"Title *"}
            value={data.title}
            error={errors.title}
            onChange={this.handleChange}
          />
          <SelectInput
            data={data}
            onChange={this.handleChange}
            error={errors.category}
          />
          <Input
            name={"price"}
            label={"Price *"}
            value={data.price}
            error={errors.price}
            onChange={this.handleChange}
          />
          <TextArea
            name={"description"}
            label={"Description *"}
            value={data.description}
            error={errors.description}
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

export default MenuItemForm;
