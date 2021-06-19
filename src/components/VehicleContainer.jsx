import React, { Component } from "react";
import { connect } from "react-redux";

import { FaArrowLeft, FaQuestionCircle } from "react-icons/fa";

import trainPic from "../img/Vehicles/Train.svg";
import busPic from "../img/Vehicles/Bus.svg";
import carPic from "../img/Vehicles/Car.svg";
import bikePic from "../img/Vehicles/Bike.svg";

import vehicleHeader from "../img/travelRussell.svg";

import "../App.css";

// Screen to show all clickable vehicles

class VehicleContainer extends Component {
	render() {
		return (
			<>
				<button
					className="back-Btn"
					onClick={() => this.props.dispatch({ type: "CATEGORIES" })}
				>
					<FaArrowLeft className="fa-icon" />
				</button>
				<div className="logo">
					<img src={vehicleHeader}></img>
				</div>
				<div className="animalHome">
					<div
						className="wordContainer"
						onClick={() =>
							this.props.dispatch({ type: "TRAIN" }, () =>
								console.log("this was clicked")
							)
						}
					>
						<img src={trainPic} alt="Train"></img>
					</div>
					<div
						className="wordContainer"
						onClick={() =>
							this.props.dispatch({ type: "CAR" }, () =>
								console.log("this was clicked")
							)
						}
					>
						<img src={carPic} alt="Car"></img>
					</div>
					<div
						className="wordContainer"
						onClick={() =>
							this.props.dispatch({ type: "BIKE" }, () =>
								console.log("this was clicked")
							)
						}
					>
						<img src={bikePic} alt="Bike"></img>
					</div>
					<div
						className="wordContainer"
						onClick={() =>
							this.props.dispatch({ type: "BUS" }, () =>
								console.log("this was clicked")
							)
						}
					>
						<img src={busPic}></img>
					</div>
				</div>
				<button
					className="parents"
					onClick={() => this.props.dispatch({ type: "PARENTS" })}
				>
					<FaQuestionCircle className="parentsIcon" />
				</button>
			</>
		);
	}
}

export default connect()(VehicleContainer);
