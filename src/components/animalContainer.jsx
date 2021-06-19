import React, { Component } from "react";
import { connect } from "react-redux";

import { FaArrowLeft, FaQuestionCircle } from "react-icons/fa";

import dogPic from "../img/dog.svg";
import catPic from "../img/cat.svg";
import cowPic from "../img/cow.svg";
import henPic from "../img/hen.svg";
import pigPic from "../img/pig.svg";
import owlPic from "../img/owl.svg";

import russell from "../img/RussellsFarm.png";

import ForParents from "./forParents";

import "../App.css";

// Screen to show all clickable animals

class AnimalContainer extends Component {
  render() {
    return (
      <>
        <button
          className="back-Btn"
          onClick={() => this.props.dispatch({ type: "CATEGORIES" })}
        >
          <FaArrowLeft className="fa-icon" />
        </button>
        <div className="logo">
          <img src={russell}></img>
        </div>
        <div className="animalHome">
          <div
            className="wordContainer"
            onClick={() =>
              this.props.dispatch({ type: "DOG" }, () =>
                console.log("this was clicked")
              )
            }
          >
            <img src={dogPic} alt="Dog"></img>
          </div>
          <div
            className="wordContainer"
            onClick={() =>
              this.props.dispatch({ type: "CAT" }, () =>
                console.log("this was clicked")
              )
            }
          >
            <img src={catPic} alt="Cat"></img>
          </div>
          <div
            className="wordContainer"
            onClick={() =>
              this.props.dispatch({ type: "OWL" }, () =>
                console.log("this was clicked")
              )
            }
          >
            <img src={owlPic} alt="Owl"></img>
          </div>
          <div
            className="wordContainer"
            onClick={() =>
              this.props.dispatch({ type: "COW" }, () =>
                console.log("this was clicked")
              )
            }
          >
            <img src={cowPic}></img>
          </div>
          <div
            className="wordContainer"
            onClick={() =>
              this.props.dispatch({ type: "PIG" }, () =>
                console.log("this was clicked")
              )
            }
          >
            <img src={pigPic} alt="Pig"></img>
          </div>
          <div
            className="wordContainer"
            onClick={() =>
              this.props.dispatch({ type: "HEN" }, () =>
                console.log("this was clicked")
              )
            }
          >
            <img src={henPic} alt="Hen"></img>
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

export default connect()(AnimalContainer);
