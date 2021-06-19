import React, { Component } from "react";
import { connect } from "react-redux";
import alphabetHeader from "../img/alphabetheader.svg";

import { FaArrowLeft, FaQuestionCircle } from "react-icons/fa";
import letterA from "../img/alphabet/A.png";
import letterB from "../img/alphabet/B.png";
import letterC from "../img/alphabet/C.png";
import letterD from "../img/alphabet/D.png";
import letterE from "../img/alphabet/E.png";
import letterF from "../img/alphabet/F.png";
import letterG from "../img/alphabet/G.png";
import letterH from "../img/alphabet/H.png";
import letterI from "../img/alphabet/I.png";
import letterJ from "../img/alphabet/J.png";
import letterK from "../img/alphabet/K.png";
import letterL from "../img/alphabet/L.png";
import letterM from "../img/alphabet/M.png";
import letterN from "../img/alphabet/N.png";
import letterO from "../img/alphabet/O.png";
import letterP from "../img/alphabet/P.png";
import letterQ from "../img/alphabet/Q.png";
import letterR from "../img/alphabet/R.png";
import letterS from "../img/alphabet/S.png";
import letterT from "../img/alphabet/T.png";
import letterU from "../img/alphabet/U.png";
import letterV from "../img/alphabet/V.png";
import letterW from "../img/alphabet/W.png";
import letterX from "../img/alphabet/X.png";
import letterY from "../img/alphabet/Y.png";
import letterZ from "../img/alphabet/Z.png";

import Aa from "../audio/Aa.wav";
import Bb from "../audio/Bb.wav";
import Cc from "../audio/Cc.wav";
import Dd from "../audio/Dd.wav";
import Ee from "../audio/Ee.wav";
import Ff from "../audio/Ff.wav";
import Gg from "../audio/Gg.wav";
import Hh from "../audio/Hh.wav";
import Ii from "../audio/Ii.wav";
import Jj from "../audio/Jj.wav";
import Kk from "../audio/Kk.wav";
import Ll from "../audio/Ll.wav";
import Mm from "../audio/Mm.wav";
import Nn from "../audio/Nn.wav";
import Oo from "../audio/Oo.wav";
import Pp from "../audio/Pp.wav";
import Qq from "../audio/Qq.wav";
import Rr from "../audio/Rr.wav";
import Ss from "../audio/Ss.wav";
import Tt from "../audio/Tt.wav";
import Uu from "../audio/Uu.wav";
import Vv from "../audio/Vv.wav";
import Ww from "../audio/Ww.wav";
import Xx from "../audio/Xx.wav";
import Yy from "../audio/Yy.wav";
import Zz from "../audio/Zz.wav";

import "../App.css";

// Screen to show all clickable animals

class AlphabetContainer extends Component {
  playAudio = (letter) => {
    let audio;
    switch (letter) {
      case "Aa":
        audio = new Audio(Aa);
        break;
      case "Bb":
        audio = new Audio(Bb);
        break;
      case "Cc":
        audio = new Audio(Cc);
        break;
      case "Dd":
        audio = new Audio(Dd);
        break;
      case "Ee":
        audio = new Audio(Ee);
        break;
      case "Ff":
        audio = new Audio(Ff);
        break;
      case "Gg":
        audio = new Audio(Gg);
        break;
      case "Hh":
        audio = new Audio(Hh);
        break;
      case "Ii":
        audio = new Audio(Ii);
        break;
      case "Jj":
        audio = new Audio(Jj);
        break;
      case "Kk":
        audio = new Audio(Kk);
        break;
      case "Ll":
        audio = new Audio(Ll);
        break;
      case "Mm":
        audio = new Audio(Mm);
        break;
      case "Nn":
        audio = new Audio(Nn);
        break;
      case "Oo":
        audio = new Audio(Oo);
        break;
      case "Pp":
        audio = new Audio(Pp);
        break;
      case "Qq":
        audio = new Audio(Qq);
        break;
      case "Rr":
        audio = new Audio(Rr);
        break;
      case "Ss":
        audio = new Audio(Ss);
        break;
      case "Tt":
        audio = new Audio(Tt);
        break;
      case "Uu":
        audio = new Audio(Uu);
        break;
      case "Vv":
        audio = new Audio(Vv);
        break;
      case "Ww":
        audio = new Audio(Ww);
        break;
      case "Xx":
        audio = new Audio(Xx);
        break;
      case "Yy":
        audio = new Audio(Yy);
        break;
      case "Zz":
        audio = new Audio(Zz);
        break;
    }
    audio.play();
  };
  render() {
    return (
      <>
        <button
          className="back-Btn"
          onClick={() => this.props.dispatch({ type: "HOMEPAGE" })}
        >
          <FaArrowLeft className="fa-icon" />
        </button>
        <div>
          <img className="alphabetHeader" src={alphabetHeader}></img>
          <div className="alphabet">
            <div className="wordContainer" onClick={() => this.playAudio("Aa")}>
              <img src={letterA} alt="A"></img>
            </div>
            <div className="wordContainer" onClick={() => this.playAudio("Bb")}>
              <img src={letterB} alt="B"></img>
            </div>
            <div className="wordContainer" onClick={() => this.playAudio("Cc")}>
              <img src={letterC} alt="C"></img>
            </div>
            <div className="wordContainer" onClick={() => this.playAudio("Dd")}>
              <img src={letterD} alt="D"></img>
            </div>
            <div className="wordContainer" onClick={() => this.playAudio("Ee")}>
              <img src={letterE} alt="E"></img>
            </div>
            <div className="wordContainer" onClick={() => this.playAudio("Ff")}>
              <img src={letterF} alt="F"></img>
            </div>
            <div className="wordContainer" onClick={() => this.playAudio("Gg")}>
              <img src={letterG} alt="G"></img>
            </div>
            <div className="wordContainer" onClick={() => this.playAudio("Hh")}>
              <img src={letterH} alt="H"></img>
            </div>
            <div className="wordContainer" onClick={() => this.playAudio("Ii")}>
              <img src={letterI} alt="I"></img>
            </div>
            <div className="wordContainer" onClick={() => this.playAudio("Jj")}>
              <img src={letterJ} alt="J"></img>
            </div>
            <div className="wordContainer" onClick={() => this.playAudio("Kk")}>
              <img src={letterK} alt="K"></img>
            </div>
            <div className="wordContainer" onClick={() => this.playAudio("Ll")}>
              <img src={letterL} alt="L"></img>
            </div>
            <div className="wordContainer" onClick={() => this.playAudio("Mm")}>
              <img src={letterM} alt="M"></img>
            </div>
            <div className="wordContainer" onClick={() => this.playAudio("Nn")}>
              <img src={letterN} alt="N"></img>
            </div>
            <div className="wordContainer" onClick={() => this.playAudio("Oo")}>
              <img src={letterO} alt="O"></img>
            </div>
            <div className="wordContainer" onClick={() => this.playAudio("Pp")}>
              <img src={letterP} alt="P"></img>
            </div>
            <div className="wordContainer" onClick={() => this.playAudio("Qq")}>
              <img src={letterQ} alt="Q"></img>
            </div>
            <div className="wordContainer" onClick={() => this.playAudio("Rr")}>
              <img src={letterR} alt="R"></img>
            </div>
            <div className="wordContainer" onClick={() => this.playAudio("Ss")}>
              <img src={letterS} alt="S"></img>
            </div>
            <div className="wordContainer" onClick={() => this.playAudio("Tt")}>
              <img src={letterT} alt="T"></img>
            </div>
            <div className="wordContainer" onClick={() => this.playAudio("Uu")}>
              <img src={letterU} alt="U"></img>
            </div>
            <div className="wordContainer" onClick={() => this.playAudio("Vv")}>
              <img src={letterV} alt="V"></img>
            </div>
            <div className="wordContainer" onClick={() => this.playAudio("Ww")}>
              <img src={letterW} alt="W"></img>
            </div>
            <div className="wordContainer" onClick={() => this.playAudio("Xx")}>
              <img src={letterX} alt="W"></img>
            </div>
            <div className="wordContainer" onClick={() => this.playAudio("Yy")}>
              <img src={letterY} alt="X"></img>
            </div>
            <div className="wordContainer" onClick={() => this.playAudio("Zz")}>
              <img src={letterZ} alt="Z"></img>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect()(AlphabetContainer);
