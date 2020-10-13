import React from "react";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.name || !this.state.password) {
      alert("Please enter username and password!");
    } else {
      this.props.handleLogIn(this.state.name, this.state.password);
      this.setState({
        name: "",
        password: "",
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Log In</h1>
        <h3>Become part of our community!</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            ></input>
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            ></input>
          </label>
          <label>
            <input type="checkbox"></input>
            Remember Me
          </label>
          <br />

          <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default LogIn;
