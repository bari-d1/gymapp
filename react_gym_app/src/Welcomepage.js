import React from "react";
import ReactDOM from "react-dom";
import './Welcomepage.css';
import layer0 from "./images/layer0.png";
import { FaArrowCircleRight } from 'react-icons/fa';

class Welcomepage extends React.Component {
    render() {
      return(
        <div id="conatiner">
            <div id="greeting">
                <h1>Welcome Dayo</h1>
            </div>
            <div id="imageholder">
                <img src={layer0} className="image" alt="strong guy" />
            </div>
            <div id="proceed">
                <div id="next_page">Continue <FaArrowCircleRight fontSize= "2.5em"/></div>
            </div>
        </div>
      ) 
    }
  }

export default Welcomepage;