import React, { Component } from "react";
import { connect } from "react-redux";
import AnimalContainer from "./components/animalContainer";

import "./App.css";

import Dog from "./components/dog";
import Cat from "./components/cat";
import Cow from "./components/cow";
import Hen from "./components/hen";
import Pig from "./components/pig";
import Owl from "./components/owl";
import Bus from "./components/Bus";
import Bike from "./components/Bike";
import Train from "./components/Train";
import Car from "./components/Car";
import ForParents from "./components/forParents";
import AlphabetContainer from "./components/alphabetContainer";
import Homepage from "./components/Homepage";
import Categories from "./components/Categories";
import VehicleContainer from "./components/VehicleContainer";

import letterA from "./img/alphabet/A.png";

class App extends Component {
	render() {
		// console.log(this.props.animalData);
		return (
			<>
				{this.props.screenMode === "dog" && <Dog />}
				{this.props.screenMode === "cat" && <Cat />}
				{this.props.screenMode === "cow" && <Cow />}
				{this.props.screenMode === "pig" && <Pig />}
				{this.props.screenMode === "owl" && <Owl />}
				{this.props.screenMode === "hen" && <Hen />}
				{this.props.screenMode === "bus" && <Bus />}
				{this.props.screenMode === "car" && <Car />}
				{this.props.screenMode === "train" && <Train />}
				{this.props.screenMode === "bike" && <Bike />}
				{this.props.screenMode === "parents" && <ForParents />}
				{this.props.screenMode === "alphabet" && <AlphabetContainer />}
				{this.props.screenMode === "animalcontainer" && <AnimalContainer />}
				{this.props.screenMode === "homepage" && <Homepage />}
				{this.props.screenMode === "categories" && <Categories />}
				{this.props.screenMode === "vehicle" && <VehicleContainer />}
			</>
		);
	}
}

function mapStateToProps(state) {
	return {
		animalData: state.animalData,
		screenMode: state.screenMode,
	};
}

export default connect(mapStateToProps)(App);
