import React, { Component } from "react";
import { connect } from "react-redux";
import { FaArrowLeft, FaQuestionCircle } from "react-icons/fa";

import pigPic from "../img/pig.svg";
import letterA from "../img/alphabet/A.png";
import logo from "../img/Learn_to_read_Logo.svg";

import ForParents from "./forParents";

import "../App.css";

// Screen to show all clickable animals

class Homepage extends Component {
  render() {
    return (
      <>
        <img className="logo" src={logo}></img>
        <div className="homepage">
          <div
            className="homeContainer"
            onClick={() =>
              this.props.dispatch({ type: "ALPHABET" }, () =>
                console.log("this was clicked")
              )
            }
          >
            <img className="alphabetLogo" src={letterA} alt="A"></img>
            <h2 className="title">Alphabet</h2>
          </div>
          <div
            className="homeContainer"
            onClick={() =>
              this.props.dispatch({ type: "CATEGORIES" }, () =>
                console.log("this was clicked")
              )
            }
          >
            <img src={pigPic} alt="Pig"></img>
            <h2 className="title">Categories</h2>
          </div>
        </div>
        <button
          className="parents"
          onClick={() => this.props.dispatch({ type: "PARENTS" })}
        >
          <FaQuestionCircle className="parentsIcon" />
        </button>
      </>
    );
  }
}

export default connect()(Homepage);
