import Navbar from "./Components/Navbar/Navbar";
import NewsComponent from "./Components/NewsComponent";
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  apiKey = process.env.REACT_APP_API_KEY;
  render() {
    return (
      <Router>
        <div className="color">
          <Navbar />

          <Routes>
            <Route
              path=""
              element={
                <NewsComponent
                  apiKey={this.apiKey}
                  key="in"
                  category="general"
                  country="in"
                />
              }
            />
            <Route
              path="/in/general"
              element={
                <NewsComponent
                  apiKey={this.apiKey}
                  key="general-in"
                  category="general"
                  country="in"
                />
              }
            />
            <Route
              path="/in/business"
              element={
                <NewsComponent
                  apiKey={this.apiKey}
                  key="business-ind"
                  category="business"
                  country="in"
                />
              }
            />
            <Route
              path="/in/entertainment"
              element={
                <NewsComponent
                  apiKey={this.apiKey}
                  key="enter-ind"
                  category="entertainment"
                  country="in"
                />
              }
            />
            <Route
              path="/in/health"
              element={
                <NewsComponent
                  apiKey={this.apiKey}
                  key="heal-ind"
                  category="health"
                  country="in"
                />
              }
            />
            <Route
              path="/in/science"
              element={
                <NewsComponent
                  apiKey={this.apiKey}
                  key="science-ind"
                  category="science"
                  country="in"
                />
              }
            />
            <Route
              path="/in/sports"
              element={
                <NewsComponent
                  apiKey={this.apiKey}
                  key="sports-ind"
                  category="sports"
                  country="in"
                />
              }
            />
            <Route
              path="/in/technology"
              element={
                <NewsComponent
                  apiKey={this.apiKey}
                  key="tech-ind"
                  category="technology"
                  country="in"
                />
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}
