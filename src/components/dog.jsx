import React, { Component } from "react";
import { connect } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";

import picture from "../img/dog.svg";
import listen from "../img/listen.png";

import D from "../audio/D.wav";
import O from "../audio/O.wav";
import G from "../audio/G.wav";
import DOG from "../audio/DOG.wav";
import DOG_NOISE from "../audio/ANIMAL NOISES/DOG_NOISE.wav";

import letterD from "../img/alphabet/D.png";
import letterO from "../img/alphabet/O.png";
import letterG from "../img/alphabet/G.png";

class Dog extends Component {
  playAudio = (letter) => {
    let audio;
    switch (letter) {
      case "D":
        audio = new Audio(D);
        break;
      case "O":
        audio = new Audio(O);
        break;
      case "G":
        audio = new Audio(G);
        break;
      case "DOG":
        audio = new Audio(DOG);
        break;
      case "DOG_NOISE":
        audio = new Audio(DOG_NOISE);
        break;
    }
    audio.play();
  };
  render() {
    return (
      <div>
        <div className="container">
          <div>
            <img src={letterD} onClick={() => this.playAudio("D")}></img>
            <img src={letterO} onClick={() => this.playAudio("O")}></img>
            <img src={letterG} onClick={() => this.playAudio("G")}></img>
          </div>
          <div>
            <img
              src={listen}
              className="listen-img"
              onClick={() => this.playAudio("DOG")}
            ></img>
          </div>
          <div>
            <img
              src={picture}
              onClick={() => this.playAudio("DOG_NOISE")}
            ></img>
          </div>
          <button
            className="back-Btn-words"
            onClick={() => this.props.dispatch({ type: "ANIMALCONTAINER" })}
          >
            <FaArrowLeft className="fa-icon" />
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(Dog);
