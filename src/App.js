import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import NewsComponent from "./Components/NewsComponent";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="color">
        <Navbar />
        <NewsComponent />
      </div>
    );
  }
}
