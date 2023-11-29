import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, authorName, publishedAt, source } =
      this.props;
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
              height: "250px",
            }}
          >
            <h5 className="card-title">
              {title}
              <span
                class="position-absolute top-0  translate-middle badge rounded-pill bg-primary"
                style={{ zIndex: "1", left: "90%" }}
              >
                {source}
              </span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">{authorName}</p>
            <p className="card-text">
              Publish Date : {new Date(publishedAt).toDateString()}
            </p>
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
