import React, { Component } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { connect } from "react-redux";

import bikePic from "../img/Vehicles/Bike.svg";

import B from "../audio/B.wav";
import I from "../audio/I.wav";
import K from "../audio/K.wav";
import E from "../audio/E.wav";

// import BIKE from "../audio/BIKE.wav";
// import BIKE_NOISE from "../audio/ANIMAL NOISES/BIKE_NOISE.wav";

import letterB from "../img/alphabet/B.png";
import letterI from "../img/alphabet/I.png";
import letterK from "../img/alphabet/K.png";
import letterE from "../img/alphabet/E.png";

class Bike extends Component {
  playAudio = (letter) => {
    let audio;
    switch (letter) {
      case "B":
        audio = new Audio(B);
        break;
      case "I":
        audio = new Audio(I);
        break;
      case "K":
        audio = new Audio(K);
        break;
      case "E":
        audio = new Audio(E);
        break;

      // case "BIKE":
      // 	audio = new Audio(BIKE);
      // 	break;
      // case "BIKE_NOISE":
      // 	audio = new Audio(BIKE_NOISE);
    }
    audio.play();
  };
  render() {
    return (
      <div className="container">
        <div>
          <img src={letterB} onClick={() => this.playAudio("B")}></img>
          <img src={letterI} onClick={() => this.playAudio("I")}></img>
          <img src={letterK} onClick={() => this.playAudio("K")}></img>
          <img src={letterE} onClick={() => this.playAudio("E")}></img>
        </div>
        <div>
          <img className="vehicleImage" src={bikePic}></img>
        </div>
        <div>
          {/* <img src={picture} onClick={() => this.playAudio("BIKE_NOISE")}></img> */}
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

export default connect()(Bike);
