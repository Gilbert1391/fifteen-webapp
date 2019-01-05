import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import Home from "./components/routes/home";
import MenuItemForm from "./components/routes/menuItemForm";
import LoginForm from "./components/routes/loginForm";
import Logout from "./components/routes/logout";
import NotFound from "./components/routes/notFound";
import "react-toastify/dist/ReactToastify.css";
import "./main.scss";

class App extends Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const admin = jwtDecode(jwt);
      this.setState({ admin });
    } catch (ex) {}
  }
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Switch>
          <Route path="/menu-item/:id" component={MenuItemForm} />
          <Route path="/admin" component={LoginForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/not-found" component={NotFound} />
          <Route
            path="/"
            exact
            render={props => <Home {...props} admin={this.state.admin} />}
          />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
