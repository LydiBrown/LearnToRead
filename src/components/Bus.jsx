import React, { Component } from "react";
import { connect } from "react-redux";

import { FaArrowLeft } from "react-icons/fa";

import busPic from "../img/Vehicles/Bus.svg";

import B from "../audio/B.wav";
import U from "../audio/U.wav";
import S from "../audio/S.wav";
// import BUS from "../audio/BUS.wav";
// import BUS_NOISE from "../audio/ANIMAL NOISES/BUS_NOISE.wav";

import letterB from "../img/alphabet/B.png";
import letterU from "../img/alphabet/U.png";
import letterS from "../img/alphabet/S.png";

class Bus extends Component {
  playAudio = (letter) => {
    let audio;
    switch (letter) {
      case "B":
        audio = new Audio(B);
        break;
      case "U":
        audio = new Audio(U);
        break;
      case "S":
        audio = new Audio(S);
        break;
      // case "BUS":
      // 	audio = new Audio(BUS);
      // 	break;
      // case "BUS_NOISE":
      // 	audio = new Audio(BUS_NOISE);
    }
    audio.play();
  };
  render() {
    return (
      <div className="container">
        <div>
          <img src={letterB} onClick={() => this.playAudio("B")}></img>
          <img src={letterU} onClick={() => this.playAudio("U")}></img>
          <img src={letterS} onClick={() => this.playAudio("S")}></img>
        </div>
        <div>{<img className="vehicleImage"src={busPic}></img>}</div>
        <div>
          {/* <img src={picture} onClick={() => this.playAudio("BUS_NOISE")}></img> */}
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

export default connect()(Bus);
