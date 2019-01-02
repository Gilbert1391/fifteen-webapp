import React, { Component } from "react";
import { ClipLoader } from "react-spinners";
import { getData, getHeading } from "../../service/fakeData";
import Hero from "../hero";
import About from "../about";
import Menu from "../menu";
import Cocktails from "../cocktails";
import Reservation from "../reservation";
import Footer from "../footer";

class Home extends Component {
  state = {
    data: [],
    heading: {}
  };

  componentDidMount() {
    // const { data } = await getData();
    // const { data: heading } = await getHeading();

    this.setState({ data: getData, heading: getHeading });
  }

  render() {
    const { data, heading } = this.state;

    if (data.length === 0 || Object.keys(heading).length === 0)
      return (
        <div className="center">
          <ClipLoader color={"#ff7517"} />
        </div>
      );

    return (
      <React.Fragment>
        <Hero data={heading} />
        <main>
          <About />
          <Menu data={data} />
          <Cocktails data={data} />
          <Reservation />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
