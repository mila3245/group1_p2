import React, { Component } from "react";
import Container from "../Resources/Container";
import Row from "../Resources/Row";
import Col from "../Resources/Col";
//import Card from "../Resources/Card";
import "./lango.css"
// // import SearchForm from "./Resources/SearchForm";
// import MovieDetail from "./Resources/MovieDetail"
import API from "../API KEYS/Gtranslate";
class Lango extends Component {
  state = {
    result: "",
    search: "",
    inputLang: "",
    outputLang: "",
    languageOptions:[]
  };
  componentDidMount(){
    API.languages().then(({data})=>{
      this.setState({languageOptions: data.languages})
    })
  }
 translateText = () => {
    API.translate(this.state.search, this.state.inputLang, this.state.outputLang)
      .then(({data})=> {
        console.log(data.translations[0])
        this.setState({ result: data.translations[0].translatedText })
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
    this.translateText();
  };
  render() {
    return (
      <Container>
        {/* <Row> */}
          <Col size="6">
          {/* <Col div className="columns is-vcentered"> */}
          <div className="field has-background-white py-5 px-5">
            
            <div className="control columns is-multiline is-mobile">
              <div className="column is-half select">
                <select onChange={this.handleInputChange} name="inputLang" value={this.state.inputLang}>
                  <option>-- Detect Language -- </option>
                  {this.state.languageOptions.map(({name, language})=>{
                    return (<option value={language}>{name}</option>)
                  })}
                </select>
                <textarea className="textarea" placeholder="Type Text"
        name="search" value={this.state.search} onChange={this.handleInputChange}></textarea>
        <Row>
        <button className="button" onClick={this.handleFormSubmit}>Translate</button>
        </Row>
              </div>
              <div className="column is-half select">
              
                <select onChange={this.handleInputChange} name="outputLang" value={this.state.outputLang}>
                  <option>-- Translation --</option>
                  {this.state.languageOptions.map(({name, language})=>{
                    return (<option value={language}>{name}</option>)
                  })}
                </select>
                <textarea className="textarea" placeholder="~" disabled={true}
        name="search" value={this.state.result} ></textarea>
              </div>
            </div>
          </div>
          </Col>
        {/* </Row> */}
     {/*    <Row>
        <textarea class="textarea" placeholder="enter text"
        name="search" value={this.state.search} onChange={this.handleInputChange}></textarea>
         <textarea class="textarea" placeholder="~" disabled={true}
        name="search" value={this.state.result} ></textarea>
        </Row> */}
        {}
        {/* <Row>
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
          class upslash
        </Row> */}
      </Container>
    );
  }
}
export default Lango;




















