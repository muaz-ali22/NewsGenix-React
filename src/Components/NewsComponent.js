import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import { PropTypes } from "prop-types";
import { sentenceCase } from "sentence-case";
export default class NewsComponent extends Component {
  static defaultProps = {
    pageSize: 6,
    category: "health",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `NewsGenix - ${sentenceCase(this.props.category)}`;
  }
  handleNext = async () => {
    let Url = `https://newsapi.org/v2/top-headlines?category=${
      this.props.category
    }&country=${this.props.country}&apiKey=${this.props.apiKey}&pageSize=${
      this.props.pageSize
    }&page=${this.state.page + 1}`;
    this.setState({ loading: true });
    let data = await fetch(Url);
    // console.log(data);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      loading: false,
      articles: parsedData.articles,
    });
  };

  handlePrevious = async () => {
    let Url = `https://newsapi.org/v2/top-headlines?category=${
      this.props.category
    }&country=${this.props.country}&apiKey=${this.props.apiKey}&pageSize=${
      this.props.pageSize
    }&page=${this.state.page - 1}`;
    this.setState({ loading: true });

    let data = await fetch(Url);
    // console.log(data);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      loading: false,
      articles: parsedData.articles,
    });
  };

  async componentDidMount() {
    let Url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });

    let data = await fetch(Url);

    // console.log(data);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults,
    });
  }
  render() {
    return (
      <div className="container my-3 ">
        <h1
          className="text-center"
          style={{
            border: "2px solid rgb(155,29,33)",
            backgroundColor: "rgb(155,29,33)",
            padding: "5px",
            color: "wheat",
            marginTop: "95px",
          }}
        >
          NewsGenix - Top {sentenceCase(this.props.category)} Headlines
        </h1>
        {this.state.loading && <Spinner />}

        <div className="row ">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4 text-center" key={element.url}>
                  <NewsItems
                    title={
                      element.title ? element.title.slice(0, 20) : "Title Here"
                    }
                    description={
                      element.description
                        ? element.description.slice(0, 60)
                        : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://thumbs.dreamstime.com/z/world-map-technological-background-best-internet-concept-global-business-elements-image-furnished-bright-lines-66529240.jpg?w=992"
                    }
                    newsUrl={element.url}
                    authorName={
                      element.author
                        ? element.author.slice(0, 100)
                        : "Author Name"
                    }
                    publishedAt={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container my-3 d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-primary"
            onClick={this.handlePrevious}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-primary"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
