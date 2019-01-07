import React, { Component } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { getItems, deleteItem, getHeading } from "../../service/dataService";
import Hero from "../hero";
import About from "../about";
import Menu from "../menu";
import Drinks from "../drinks";
import Reservation from "../reservation";
import Footer from "../footer";

class Home extends Component {
  state = {
    data: [],
    heading: {}
  };

  async componentDidMount() {
    const { data } = await getItems();
    const { data: heading } = await getHeading();

    this.setState({ data, heading });
  }

  handleDelete = async itemId => {
    const originalData = this.state.data;
    const data = originalData.filter(item => item._id !== itemId);
    this.setState({ data });

    try {
      await deleteItem(itemId);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("This item has already been deleted.");
      }

      this.setState({ data: originalData });
    }
  };

  render() {
    const { data, heading } = this.state;

    this.props.admin
      ? (document.title = "Fifteeen | Admin Panel")
      : (document.title = "Fifteeen | Restaurant & Bar");

    if (!data.length || !heading.length) {
      return (
        <div className="center">
          <ClipLoader color={"#ff7517"} />
        </div>
      );
    }

    return (
      <React.Fragment>
        <Hero data={heading} admin={this.props.admin} />
        <main>
          <About />
          <Menu
            data={data}
            onDelete={this.handleDelete}
            admin={this.props.admin}
          />
          <Drinks
            data={data}
            onDelete={this.handleDelete}
            admin={this.props.admin}
          />
          <Reservation />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
