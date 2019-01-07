import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Nav from "./nav";
import PhoneNav from "./phoneNav";

class Header extends Component {
  state = {
    show: false
  };

  isChecked = React.createRef();

  handleSetActive = () => {
    this.setState({ show: true });
  };

  handleSetInactive = () => {
    this.setState({ show: false });
  };

  handleCheck = () => {
    this.isChecked.current.checked = false;
  };

  render() {
    return (
      <header className="header">
        <div className="logo">
          <span className="logo__heading">Fifteen</span>
        </div>
        <PhoneNav
          onActive={this.handleSetActive}
          admin={this.props.admin}
          isChecked={this.isChecked}
          onCheck={this.handleCheck}
        />
        <nav>
          <Nav
            onActive={this.handleSetActive}
            onInactive={this.handleSetInactive}
            admin={this.props.admin}
          />
        </nav>
        <Fade top collapse when={this.state.show}>
          <nav className="sticky">
            <Nav
              onActive={this.handleSetActive}
              onInactive={this.handleSetInactive}
              admin={this.props.admin}
            />
          </nav>
        </Fade>
      </header>
    );
  }
}

export default Header;
