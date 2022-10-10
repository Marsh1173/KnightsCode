import React, { Component, createElement } from "react";
import ReactDOM from "react-dom";

class MainDiv extends Component<{}, {}> {
  render() {
    return <p>Knights Code</p>;
  }
}

const domContainer = document.querySelector("#reactDom");
ReactDOM.render(createElement(MainDiv), domContainer);
