import React, { Component } from "react";
import Container from "../Resources/Container";
import Row from "../Resources/Row";
import Col from "../Resources/Col";
import Card from "../Resources/Card";
import SearchForm from "../Resources/SearchForm";
import API from "./API KEYS/API";

class Lango extends Component {
  state = {
    result: {},
    search: "",
    inputLang: "",
    outputLang: ""
  };

 translateText = (search, inputLang, outputLang) => {
    API.translate(search, inputLang, outputLang)
      .then(res => {
        this.setState({ result: res.data })
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.translateText(this.state.search, this.state.inputLang, this.state.outputLang);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Title || "Search for English "}
            >
              <MovieDetail
                title={this.state.result.Title}
                src={this.state.result.Poster}
                director={this.state.result.Director}
                genre={this.state.result.Genre}
                released={this.state.result.Released}
              />
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Lango;
