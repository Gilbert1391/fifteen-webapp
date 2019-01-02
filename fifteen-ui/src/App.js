import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/routes/home";
import LoginForm from "./components/loginForm";
import "react-toastify/dist/ReactToastify.css";
import "./main.scss";

class App extends Component {
  // handleScroll = () => {
  //   let show;
  //   window.pageYOffset > 780 ? (show = true) : (show = false);
  //   this.setState({ show });
  // };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Switch>
          <Route path="/admin" component={LoginForm} />
          <Home />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
