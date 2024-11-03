import React, { Component } from "react";

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    console.log("Welcome component constructor");
  }

  componentDidMount() {
    console.log("Welcome component componentDidMount");
  }

  componentWillUnmount() {
    console.log("Welcome component componentWillUnmount");
  }

  render() {
    console.log("Welcome component render");
    return <div>Welcome Page : {this.props.name}</div>;
  }
}
