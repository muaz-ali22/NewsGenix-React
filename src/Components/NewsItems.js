import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let { title, description, imageUrl } = this.props;
    return (
      <div className="container my-4 ">
        <div className="card">
          <img
            src={imageUrl}
            className="card-img-top"
            alt="..."
            style={{ height: "190px" }}
          />
          <div
            className="card-body"
            style={{
              backgroundColor: " rgb(0, 58, 109)",
              color: "white",
              height: "210px",
            }}
          >
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href="noreferrer"
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
