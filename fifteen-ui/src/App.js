import React, { Component } from "react";
import Hero from "./components/hero";
import About from "./components/about";
import Slider from "./components/slider";
import Menu from "./components/menu";
import "./main.scss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero />
        <main>
          <About />
          <Slider />
          <Menu />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
