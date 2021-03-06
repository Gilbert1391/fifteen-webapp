import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import Home from "./components/routes/home";
import MenuItemForm from "./components/routes/menuItemForm";
import LoginForm from "./components/routes/loginForm";
import HeadingForm from "./components/routes/headingForm";
import Logout from "./components/routes/logout";
import NotFound from "./components/routes/notFound";
import UnexpectedError from "./components/routes/unexpectedError";
import "react-toastify/dist/ReactToastify.css";
import "./main.scss";

class App extends Component {
  state = {};

  componentDidMount() {
    // The try catch block is only in case there is no jwt in the browser storage
    // Because the jwtDecode function crashes the app you pass null or empty string
    try {
      const jwt = localStorage.getItem("token");
      const admin = jwtDecode(jwt);
      this.setState({ admin });
    } catch (ex) {}
  }

  render() {
    const { admin } = this.state;

    return (
      <React.Fragment>
        <ToastContainer autoClose={4000} />
        <Switch>
          <Route
            path="/heading"
            render={props => {
              if (!admin) return <Redirect to="/admin" />;
              return <HeadingForm {...props} />;
            }}
          />
          <Route
            path="/menu-item/:id"
            render={props => {
              if (!admin) return <Redirect to="/admin" />;
              return <MenuItemForm {...props} />;
            }}
          />
          <Route
            path="/admin"
            render={props => <LoginForm {...props} admin={admin} />}
          />
          <Route path="/logout" component={Logout} />
          <Route path="/unexpected-error" component={UnexpectedError} />
          <Route path="/not-found" component={NotFound} />
          <Route
            path="/"
            exact
            render={props => <Home {...props} admin={admin} />}
          />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
