import React, { Component } from "react";
import { connect } from "react-redux";
import picture from "../img/owl.svg";
import { FaArrowLeft } from "react-icons/fa";
import listen from "../img/listen.png";

import O from "../audio/O.wav";
import W from "../audio/W.wav";
import L from "../audio/L.wav";
import OWL from "../audio/OWL.wav";
import OWL_NOISE from "../audio/ANIMAL NOISES/OWL_NOISE.wav";

import letterO from "../img/alphabet/O.png";
import letterW from "../img/alphabet/W.png";
import letterL from "../img/alphabet/L.png";

class Owl extends Component {
  playAudio = (letter) => {
    let audio;
    switch (letter) {
      case "O":
        audio = new Audio(O);
        break;
      case "W":
        audio = new Audio(W);
        break;
      case "L":
        audio = new Audio(L);
        break;
      case "OWL":
        audio = new Audio(OWL);
        break;
      case "OWL_NOISE":
        audio = new Audio(OWL_NOISE);
        break;
    }
    audio.play();
  };
  render() {
    return (
      <div className="container">
        <div>
          <img src={letterO} onClick={() => this.playAudio("O")}></img>
          <img src={letterW} onClick={() => this.playAudio("W")}></img>
          <img src={letterL} onClick={() => this.playAudio("L")}></img>
        </div>
        <div>
          <img
            src={listen}
            className="listen-img"
            onClick={() => this.playAudio("OWL")}
          ></img>
        </div>
        <div>
          <img src={picture} onClick={() => this.playAudio("OWL_NOISE")}></img>
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

export default connect()(Owl);
