import React, { Component } from "react";
import { data } from "./service/fakeData";
import Hero from "./components/hero";
import About from "./components/about";
import Slider from "./components/slider";
import Menu from "./components/menu";
import Cocktails from "./components/cocktails";
import Reservation from "./components/reservation";
import Footer from "./components/footer";
import "./main.scss";

class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.setState({ data });
  }

  render() {
    return (
      <React.Fragment>
        <Hero />
        <main>
          <About />
          <Slider />
          <Menu data={this.state.data} />
          <Cocktails data={this.state.data} />
          <Reservation />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
