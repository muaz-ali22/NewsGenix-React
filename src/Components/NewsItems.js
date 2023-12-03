import React from "react";

export default function NewsItems(props) {
  let {
    title,
    description,
    imageUrl,
    authorName,
    publishedAt,
    source,
    newsUrl,
  } = props;
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
              className="position-absolute top-0  translate-middle badge rounded-pill bg-primary"
              style={{ zIndex: "1", left: "50%" }}
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
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
