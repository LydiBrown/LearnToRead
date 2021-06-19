import React, { Component } from "react";
import { connect } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";
// import listen from "../img/listen.png";

import trainPic from "../img/Vehicles/Train.svg";

import T from "../audio/T.wav";
import R from "../audio/R.wav";
import A from "../audio/A.wav";
import I from "../audio/I.wav";
import N from "../audio/N.wav";
// import TRAIN from "../audio/TRAIN.wav";
// import TRAIN_NOISE from "../audio/ANIMAL NOISES/TRAIN_NOISE.wav";

import letterT from "../img/alphabet/T.png";
import letterR from "../img/alphabet/R.png";
import letterA from "../img/alphabet/A.png";
import letterI from "../img/alphabet/I.png";
import letterN from "../img/alphabet/N.png";

class Train extends Component {
  playAudio = (letter) => {
    let audio;
    switch (letter) {
      case "T":
        audio = new Audio(T);
        break;
      case "R":
        audio = new Audio(R);
        break;
      case "A":
        audio = new Audio(A);
        break;
      case "I":
        audio = new Audio(I);
        break;
      case "N":
        audio = new Audio(N);
        break;
      // case "TRAIN":
      // 	audio = new Audio(TRAIN);
      // 	break;
      // case "TRAIN_NOISE":
      // 	audio = new Audio(TRAIN_NOISE);
    }
    audio.play();
  };
  render() {
    return (
      <div className="container">
        <div className="longerWord">
          <div>
            <img src={letterT} onClick={() => this.playAudio("T")}></img>
          </div>
          <div>
            <img src={letterR} onClick={() => this.playAudio("R")}></img>
          </div>
          <div>
            <img src={letterA} onClick={() => this.playAudio("A")}></img>
          </div>
          <div>
            <img src={letterI} onClick={() => this.playAudio("I")}></img>
          </div>
          <div>
            <img src={letterN} onClick={() => this.playAudio("N")}></img>
          </div>
        </div>
        <div>
          {/* <img
						className="listen-img"
						src={listen}
						onClick={() => this.playAudio("TRAIN")}
					></img> */}
        </div>
        <div>
          <img className="vehicleImage" src={trainPic}></img>
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

export default connect()(Train);
