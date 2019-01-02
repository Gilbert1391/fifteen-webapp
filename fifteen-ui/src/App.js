import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { getData, getHeading } from "./service/fakeData";
import Hero from "./components/hero";
import About from "./components/about";
import Slider from "./components/slider";
import Menu from "./components/menu";
import Cocktails from "./components/cocktails";
import Reservation from "./components/reservation";
import Footer from "./components/footer";
import LoginForm from "./components/loginForm";
import "react-toastify/dist/ReactToastify.css";
import "./main.scss";

class App extends Component {
  state = {
    data: [],
    heading: {}
  };

  componentDidMount() {
    // const { data } = await getData();
    // const { data: heading } = await getHeading();

    // window.addEventListener("scroll", this.handleScroll);
    console.log(this.handleScroll());
    this.setState({ data: getData, heading: getHeading });
  }

  handleScroll = () => {
    // let show;
    // window.pageYOffset > 780 ? (show = true) : (show = false);
    // this.setState({ show });
    // window.addEventListener("scroll", () => {
    //   let show;
    //   window.pageYOffset > 780 ? (show = true) : (show = false);
    // });

    return window.pageYOffset;
  };

  render() {
    const { data, heading, show } = this.state;

    if (data.length === 0 || Object.keys(heading).length === 0)
      return (
        <div className="center">
          <ClipLoader color={"#ff7517"} />
        </div>
      );

    return (
      <React.Fragment>
        <ToastContainer />
        <Switch>
          <Route path="/admin" component={LoginForm} />
          <React.Fragment>
            <Hero data={heading} show={show} />
            <main>
              <About />
              <Slider />
              <Menu data={data} />
              <Cocktails data={data} />
              <Reservation />
            </main>
            <Footer />
          </React.Fragment>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
