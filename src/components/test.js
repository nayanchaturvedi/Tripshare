import React, { Component } from "react";

class test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: this.props.match.params.email,
      user: {},
    };
  }

  componentDidMount() {
    console.log(this.state.email);
  }

  render() {
    return <div>email</div>;
  }
}

export default test;
