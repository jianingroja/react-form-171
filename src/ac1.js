import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkPass = this.checkPass.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  }

  checkPass(s) {
    var ls = 0;
    if (s.length < 6) {
      ls++;
    }
    if (s.match(/([a-z])+/)) {
      ls++;
    }
    if (s.match(/([0-9])+/)) {
      ls++;
    }
    if (s.match(/([A-Z])+/)) {
      ls++;
    }
    if (s.match(/[^a-zA-Z0-9]+/)) {
      ls++;
    }
    return ls;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (
      !this.state.name ||
      !this.state.email ||
      !this.state.password ||
      !this.state.confirmPassword
    ) {
      alert("Please complete information!");
    } else {
      if (localStorage.getItem(this.state.name) !== null) {
        alert("User already exits!");
      } else {
        const test = this.checkPass(this.state.password);
        if (test < 5) {
          alert(
            "密码不能少于 6 位，必须是字母、数字、特殊字符的组合，必须包含小写和者大写字母"
          );
          this.setState({
            password: "",
            confirmPassword: "",
          });
        } else {
          if (this.state.password !== this.state.confirmPassword) {
            alert("Please confirm password!");
            this.setState({
              password: "",
              confirmPassword: "",
            });
          } else {
            this.props.handleRegister(this.state.name, this.state.password);
          }
        }
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Create An Account</h1>
        <h3>Velkommen!</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Your Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            ></input>
          </label>
          <br />
          <label>
            Your Email:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            ></input>
          </label>
          <br />
          <label>
            Your Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            ></input>
          </label>
          <br />
          <label>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleInputChange}
            ></input>
          </label>
          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
