import React from "react";
import Register from "./ac1";
import LogIn from "./ac2";
import Footer from "./footer";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forRegister: true,
    };
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleRegister(name, password) {
    localStorage.setItem(name, password);
    alert("You have registered successfully!");
    this.setState({ forRegister: false });
  }

  handleLogIn(name, password) {
    if (localStorage.getItem(name) === password) {
      alert("Welcome to the real world!");
    } else {
      alert("Invalid Username or Password.");
    }
  }

  handleSwitch() {
    this.setState({ forRegister: !this.state.forRegister });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.forRegister ? (
            <Register handleRegister={this.handleRegister} />
          ) : (
            <LogIn handleLogIn={this.handleLogIn} />
          )}
        </div>
        <Footer
          isMember={this.state.forRegister}
          handleSwitch={this.handleSwitch}
        />
      </div>
    );
  }
}

export default Form;
