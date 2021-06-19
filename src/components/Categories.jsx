import React, { Component } from "react";
import { connect } from "react-redux";
import { FaArrowLeft, FaQuestionCircle } from "react-icons/fa";

import pigPic from "../img/pig.svg";
import trainPic from "../img/Vehicles/Train.svg";
import logo from "../img/Learn_to_read_Logo.svg";

import ForParents from "./forParents";

import "../App.css";

// Screen to show all clickable animals

class Categories extends Component {
  render() {
    return (
      <>
        <div className="relative">
          <button
            className="back-Btn"
            onClick={() => this.props.dispatch({ type: "HOMEPAGE" })}
          >
            <FaArrowLeft className="fa-icon" />
          </button>
          <img className="logo" src={logo}></img>
          <div className="homepage">
            <div
              className="homeContainer"
              onClick={() =>
                this.props.dispatch({ type: "ANIMALCONTAINER" }, () =>
                  console.log("this was clicked")
                )
              }
            >
              <img src={pigPic} alt="Pig"></img>
              <h2 className="title">Animals</h2>
            </div>
            <div
              className="homeContainer"
              onClick={() =>
                this.props.dispatch({ type: "VEHICLE" }, () =>
                  console.log("this was clicked")
                )
              }
            >
              <img className="alphabetLogo" src={trainPic} alt="Train"></img>
              <h2 className="title">Vehicles</h2>
            </div>
          </div>
          <button
            className="parents"
            onClick={() => this.props.dispatch({ type: "PARENTS" })}
          >
            <FaQuestionCircle className="parentsIcon" />
          </button>
        </div>
      </>
    );
  }
}

export default connect()(Categories);
