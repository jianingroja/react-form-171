import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton(e) {
    e.preventDefault();
    this.props.handleSwitch();
  }

  render() {
    const member = (
      <div>
        <span>Already A Member?</span>
        <button onClick={this.handleButton}>To Log In</button>
      </div>
    );
    const stranger = (
      <div>
        <span>Not Yet A Member?</span>
        <button onClick={this.handleButton}>To Register</button>
      </div>
    );
    return <div>{this.props.isMember ? member : stranger}</div>;
  }
}

export default Footer;
