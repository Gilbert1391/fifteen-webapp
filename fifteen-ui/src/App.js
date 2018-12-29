import React, { Component } from "react";
import Hero from "./components/hero";
import About from "./components/about";
import "./main.scss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero />
        <main>
          <About />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
