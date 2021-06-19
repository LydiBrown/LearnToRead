import React, { Component } from "react";
import { connect } from "react-redux";
import picture from "../img/hen.svg";
import { FaArrowLeft } from "react-icons/fa";
import listen from "../img/listen.png";

import H from "../audio/H.wav";
import E from "../audio/E.wav";
import N from "../audio/N.wav";
import HEN from "../audio/HEN.wav";
import HEN_NOISE from "../audio/ANIMAL NOISES/HEN_NOISE.wav";

import letterH from "../img/alphabet/H.png";
import letterE from "../img/alphabet/E.png";
import letterN from "../img/alphabet/N.png";

class Hen extends Component {
  playAudio = (letter) => {
    let audio;
    switch (letter) {
      case "H":
        audio = new Audio(H);
        break;
      case "E":
        audio = new Audio(E);
        break;
      case "N":
        audio = new Audio(N);
        break;
      case "HEN":
        audio = new Audio(HEN);
        break;
      case "HEN_NOISE":
        audio = new Audio(HEN_NOISE);
        break;
    }
    audio.play();
  };
  render() {
    return (
      <div className="container">
        <div>
          <img src={letterH} onClick={() => this.playAudio("H")}></img>
          <img src={letterE} onClick={() => this.playAudio("E")}></img>
          <img src={letterN} onClick={() => this.playAudio("N")}></img>
        </div>
        <div>
          <img
            src={listen}
            className="listen-img"
            onClick={() => this.playAudio("HEN")}
          ></img>
        </div>
        <div>
          <img src={picture} onClick={() => this.playAudio("HEN_NOISE")}></img>
        </div>
        <button
          className="back-Btn-words"
          onClick={() => this.props.dispatch({ type: "ANIMALCONTAINER" })}
        >
          <FaArrowLeft className="fa-icon" />
        </button>
      </div>
    );
  }
}

export default connect()(Hen);
