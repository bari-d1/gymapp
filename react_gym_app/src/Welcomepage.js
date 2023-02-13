import React from "react";
import ReactDOM from "react-dom";
import './Welcomepage.css';
import './style.css';
import layer0 from "./images/layer0.png";
import { FaArrowCircleRight } from 'react-icons/fa';
import { FaDumbbell } from 'react-icons/fa';
import 'animate.css';


class Welcomepage extends React.Component {
    render() {
      return(
        <div id="container" className="grid-container">
            <div id="greeting">
                <h1>Welcome Dayo</h1>
            </div>
            <div id="imageholder">
                <FaDumbbell className="strong animate__bounceInDown"/>
                {/* <img src={layer0} className="image" alt="strong guy" /> */}
            </div>
            <div id="proceed">
                <div id="next_page"><h1>Continue</h1><FaArrowCircleRight className="arrow" fontSize= "2em"/></div>
            </div>
        </div>
      ) 
    }
  }

export default Welcomepage;