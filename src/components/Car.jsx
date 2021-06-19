import React, { Component } from "react";
import { connect } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";

import carPic from "../img/Vehicles/Car.svg";

import C from "../audio/C.wav";
import A from "../audio/A.wav";
import R from "../audio/R.wav";
// import CAR from "../audio/CAR.wav";
// import CAR_NOISE from "../audio/ANIMAL NOISES/CAR_NOISE.wav";

import letterC from "../img/alphabet/C.png";
import letterA from "../img/alphabet/A.png";
import letterR from "../img/alphabet/R.png";

class Car extends Component {
  playAudio = (letter) => {
    let audio;
    switch (letter) {
      case "C":
        audio = new Audio(C);
        break;
      case "A":
        audio = new Audio(A);
        break;
      case "R":
        audio = new Audio(R);
        break;
      // case "CAR":
      // 	audio = new Audio(CAR);
      // 	break;
      // case "CAR_NOISE":
      // 	audio = new Audio(CAR_NOISE);
    }
    audio.play();
  };
  render() {
    return (
      <div className="container">
        <div>
          <img src={letterC} onClick={() => this.playAudio("C")}></img>
          <img src={letterA} onClick={() => this.playAudio("A")}></img>
          <img src={letterR} onClick={() => this.playAudio("R")}></img>
        </div>
        <div>
          <img className="vehicleImage" src={carPic}></img>
        </div>
        <div>
          {/* <img src={picture} onClick={() => this.playAudio("CAR_NOISE")}></img> */}
        </div>
        <button
          className="back-Btn-words"
          onClick={() => this.props.dispatch({ type: "VEHICLE" })}
        >
          <FaArrowLeft className="fa-icon" />
        </button>
      </div>
    );
  }
}

export default connect()(Car);
