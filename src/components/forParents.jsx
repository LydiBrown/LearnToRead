import React, { Component } from "react";
import { connect } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";
import logo from "../img/Learn_to_read_Logo.svg";
class ForParents extends Component {
  render() {
    return (
      <>
        <button
          className="back-Btn"
          onClick={() => this.props.dispatch({ type: "HOMEPAGE" })}
        >
          <FaArrowLeft className="fa-icon" />
        </button>
        <img className="logo" src={logo}></img>
        <div className="forParents">
          <h1>Learn to Read with Russell</h1>
          <p>This app is to help your little one learn to read.</p>
          <h3>To use</h3>
          <p>
            Each letter has a phonic sound attached to it. Click on the letter,
            repeat the sound out loud and encourage your child to copy you.
          </p>
          <p>
            Once you've clicked each letter separately, click on the picture of
            the animal and hear the word.
          </p>
        </div>
      </>
    );
  }
}

export default connect()(ForParents);
