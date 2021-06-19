import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
const initialState = {
	screenMode: "homepage",
	animalData: [
		{
			animal: "dog",
			audio: "./sounds/dog.wav",
			img: "./img/dog.svg",
			firstLetter: "./sounds/D.wav",
			secondLetter: "./sounds/O.wav",
			thirdLetter: "./sounds/G.wav",
		},
		{
			animal: "cat",
			audio: "./sounds/cat.wav",
			img: "./img/cat.svg",
			firstLetter: "./sounds/C.wav",
			secondLetter: "./sounds/A.wav",
			thirdLetter: "./sounds/T.wav",
		},
		{
			animal: "cow",
			audio: "./sounds/cow.wav",
			img: "./img/cow.svg",
			firstLetter: "./sounds/C.wav",
			secondLetter: "./sounds/O.wav",
			thirdLetter: "./sounds/W.wav",
		},
		{
			animal: "owl",
			audio: "./sounds/owl.wav",
			img: "./img/owl.svg",
			firstLetter: "./sounds/O.wav",
			secondLetter: "./sounds/W.wav",
			thirdLetter: "./sounds/L.wav",
		},
		{
			animal: "pig",
			audio: "./sounds/pig.wav",
			img: "./img/pgi.svg",
			firstLetter: "./sounds/P.wav",
			secondLetter: "./sounds/I.wav",
			thirdLetter: "./sounds/G.wav",
		},
		{
			animal: "hen",
			audio: "./sounds/hen.wav",
			img: "./img/hen.svg",
			firstLetter: "./sounds/H.wav",
			secondLetter: "./sounds/E.wav",
			thirdLetter: "./sounds/N.wav",
		},
		{
			animal: "bus",
			audio: "./sounds/bus.wav",
			img: "./img/Vehicles/Bus.svg",
			firstLetter: "./sounds/B.wav",
			secondLetter: "./sounds/U.wav",
			thirdLetter: "./sounds/S.wav",
		},
		{
			animal: "train",
			audio: "./sounds/train.wav",
			img: "./img/Vehicles/Train.svg",
			firstLetter: "./sounds/T.wav",
			secondLetter: "./sounds/R.wav",
			thirdLetter: "./sounds/A.wav",
			fourthLetter: "./sounds/I.wav",
			fifthLetter: "./sounds/N.wav",
		},
		{
			animal: "bike",
			audio: "./sounds/bike.wav",
			img: "./img/Vehicles/Bike.svg",
			firstLetter: "./sounds/B.wav",
			secondLetter: "./sounds/I.wav",
			thirdLetter: "./sounds/K.wav",
			fourthLetter: "./sounds/E.wav",
		},
		{
			animal: "car",
			audio: "./sounds/car.wav",
			img: "./img/Vehicles/Car.svg",
			firstLetter: "./sounds/C.wav",
			secondLetter: "./sounds/A.wav",
			thirdLetter: "./sounds/R.wav",
		},
	],
};
function reducer(state = initialState, action) {
	switch (action.type) {
		case "HOMEPAGE":
			return { ...state, screenMode: "homepage" };
		case "ANIMALCONTAINER":
			return { ...state, screenMode: "animalcontainer" };
		case "DOG":
			return { ...state, screenMode: "dog" };
		case "CAT":
			return { ...state, screenMode: "cat" };
		case "COW":
			return { ...state, screenMode: "cow" };
		case "OWL":
			return { ...state, screenMode: "owl" };
		case "HEN":
			return { ...state, screenMode: "hen" };
		case "PIG":
			return { ...state, screenMode: "pig" };
		case "PARENTS":
			return { ...state, screenMode: "parents" };
		case "ALPHABET":
			return { ...state, screenMode: "alphabet" };
		case "CATEGORIES":
			return { ...state, screenMode: "categories" };
		case "VEHICLE":
			return { ...state, screenMode: "vehicle" };
		case "BUS":
			return { ...state, screenMode: "bus" };
		case "TRAIN":
			return { ...state, screenMode: "train" };
		case "BIKE":
			return { ...state, screenMode: "bike" };
		case "CAR":
			return { ...state, screenMode: "car" };
		default:
			return state;
	}
}
const store = createStore(reducer);
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
