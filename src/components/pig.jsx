import React, { Component } from "react";
import { connect } from "react-redux";
import picture from "../img/pig.svg";
import { FaArrowLeft } from "react-icons/fa";
import listen from "../img/listen.png";

import P from "../audio/P.wav";
import I from "../audio/I.wav";
import G from "../audio/G.wav";
import PIG from "../audio/PIG.wav";
import PIG_NOISE from "../audio/ANIMAL NOISES/PIG_NOISE.wav";

import letterP from "../img/alphabet/P.png";
import letterI from "../img/alphabet/I.png";
import letterG from "../img/alphabet/G.png";

class Pig extends Component {
	playAudio = (letter) => {
		let audio;
		switch (letter) {
			case "P":
				audio = new Audio(P);
				break;
			case "I":
				audio = new Audio(I);
				break;
			case "G":
				audio = new Audio(G);
				break;
			case "PIG":
				audio = new Audio(PIG);
				break;
			case "PIG_NOISE":
				audio = new Audio(PIG_NOISE);
		}
		audio.play();
	};
	render() {
		return (
			<div className="container">
				<div>
					<img src={letterP} onClick={() => this.playAudio("P")}></img>
					<img src={letterI} onClick={() => this.playAudio("I")}></img>
					<img src={letterG} onClick={() => this.playAudio("G")}></img>
				</div>
				<div>
					<img
						className="listen-img"
						src={listen}
						onClick={() => this.playAudio("PIG")}
					></img>
				</div>
				<div>
					<img src={picture} onClick={() => this.playAudio("PIG_NOISE")}></img>
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

export default connect()(Pig);
