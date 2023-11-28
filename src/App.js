import Navbar from "./Components/Navbar/Navbar";
import NewsComponent from "./Components/NewsComponent";
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="color">
          <Navbar />

          <Routes>
            <Route
              path=""
              element={
                <NewsComponent key="in" category="general" country="in" />
              }
            />
            <Route
              path="/in/general"
              element={
                <NewsComponent
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
                  key="enter-ind"
                  category="entertainment"
                  country="in"
                />
              }
            />
            <Route
              path="/in/health"
              element={
                <NewsComponent key="heal-ind" category="health" country="in" />
              }
            />
            <Route
              path="/in/science"
              element={
                <NewsComponent
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
