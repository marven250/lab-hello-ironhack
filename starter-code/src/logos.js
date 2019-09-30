import React, { Component } from "react";
import "./App.css";
const logo1 = "images/icon1.png";
const logo2 = "images/icon2.png";
const logo3 = "images/icon3.png";
const logo4 = "images/icon4.png";
class Logo extends Component {
    render() {
        return (
            <div className="Logo">
                <img src={logo1} />
                <img src={logo2}></img>
                <img src={logo3}></img>
                <img src={logo4}></img>
            </div>
        );
    }
}

export default Logo;