import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/routes/home";
import MenuItemForm from "./components/routes/menuItemForm";
import LoginForm from "./components/routes/loginForm";
import NotFound from "./components/routes/notFound";
import "react-toastify/dist/ReactToastify.css";
import "./main.scss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Switch>
          <Route path="/menu-item/:id" component={MenuItemForm} />
          <Route path="/admin" component={LoginForm} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
