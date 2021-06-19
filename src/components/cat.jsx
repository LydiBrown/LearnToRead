import React, { Component } from "react";
import { connect } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";
import listen from "../img/listen.png";
import picture from "../img/cat.svg";

import C from "../audio/C.wav";
import A from "../audio/A.wav";
import T from "../audio/T.wav";
import CAT from "../audio/CAT.wav";
import CAT_NOISE from "../audio/ANIMAL NOISES/CAT_NOISE.wav";

import letterC from "../img/alphabet/C.png";
import letterA from "../img/alphabet/A.png";
import letterT from "../img/alphabet/T.png";

class Cat extends Component {
  playAudio = (letter) => {
    let audio;
    switch (letter) {
      case "C":
        audio = new Audio(C);
        break;
      case "A":
        audio = new Audio(A);
        break;
      case "T":
        audio = new Audio(T);
        break;
      case "CAT":
        audio = new Audio(CAT);
        break;
      case "CAT_NOISE":
        audio = new Audio(CAT_NOISE);
        break;
    }
    audio.play();
  };
  render() {
    return (
      <div className="container">
        <div>
          <img src={letterC} onClick={() => this.playAudio("C")}></img>
          <img src={letterA} onClick={() => this.playAudio("A")}></img>
          <img src={letterT} onClick={() => this.playAudio("T")}></img>
        </div>
        <div>
          <img
            src={listen}
            className="listen-img"
            onClick={() => this.playAudio("CAT")}
          ></img>
        </div>
        <div>
          <img src={picture} onClick={() => this.playAudio("CAT_NOISE")}></img>
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

export default connect()(Cat);
