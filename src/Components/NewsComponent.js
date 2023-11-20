import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class NewsComponent extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  handleNext = async () => {
    let Url = `https://newsapi.org/v2/top-headlines?category=business&country=in&apiKey=8e04e5a4b90b471ca1ba43da8c1c393a&pageSize=9&page=${
      this.state.page + 1
    }`;
    let data = await fetch(Url);
    // console.log(data);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    });
  };

  handlePrevious = async () => {
    let Url = `https://newsapi.org/v2/top-headlines?category=business&country=in&apiKey=8e04e5a4b90b471ca1ba43da8c1c393a&pageSize=9&page=${
      this.state.page - 1
    }`;
    let data = await fetch(Url);
    // console.log(data);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  async componentDidMount() {
    let Url =
      "https://newsapi.org/v2/top-headlines?category=business&country=in&apiKey=8e04e5a4b90b471ca1ba43da8c1c393a&pageSize=9";
    let data = await fetch(Url);
    // console.log(data);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      pageSize: (this.state.pageSize = 9),
      totalResults: parsedData.totalResults,
    });
  }
  render() {
    return (
      <div className="container my-3 ">
        <h1
          style={{
            border: "2px solid rgb(155,29,33)",
            backgroundColor: "rgb(155,29,33)",
            padding: "5px",
            color: "wheat",
          }}
        >
          NewsGenix - Top Headlines
        </h1>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title ? element.title.slice(0, 35) : ""}
                  description={
                    element.description ? element.description.slice(0, 75) : ""
                  }
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://thumbs.dreamstime.com/z/world-map-technological-background-best-internet-concept-global-business-elements-image-furnished-bright-lines-66529240.jpg?w=992"
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container my-3 d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            class="btn btn-primary"
            onClick={this.handlePrevious}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.state.pageSize)
            }
            type="button"
            class="btn btn-primary"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
