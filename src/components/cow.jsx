import React, { Component } from "react";
import { connect } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";

import picture from "../img/cow.svg";
import listen from "../img/listen.png";
import C from "../audio/C.wav";
import O from "../audio/O.wav";
import W from "../audio/W.wav";
import COW from "../audio/COW.wav";
import COW_NOISE from "../audio/ANIMAL NOISES/COW_NOISE.wav";

import letterC from "../img/alphabet/C.png";
import letterO from "../img/alphabet/O.png";
import letterW from "../img/alphabet/W.png";

class Cow extends Component {
  playAudio = (letter) => {
    let audio;
    switch (letter) {
      case "C":
        audio = new Audio(C);
        break;
      case "O":
        audio = new Audio(O);
        break;
      case "W":
        audio = new Audio(W);
        break;
      case "COW":
        audio = new Audio(COW);
        break;
      case "COW_NOISE":
        audio = new Audio(COW_NOISE);
        break;
    }
    audio.play();
  };
  render() {
    return (
      <div className="container">
        <div>
          <img src={letterC} onClick={() => this.playAudio("C")}></img>
          <img src={letterO} onClick={() => this.playAudio("O")}></img>
          <img src={letterW} onClick={() => this.playAudio("W")}></img>
        </div>
        <div>
          <img
            src={listen}
            className="listen-img"
            onClick={() => this.playAudio("COW")}
          ></img>
        </div>
        <div>
          <img src={picture} onClick={() => this.playAudio("COW_NOISE")}></img>
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

export default connect()(Cow);
