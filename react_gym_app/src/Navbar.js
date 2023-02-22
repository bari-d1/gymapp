import React from "react";
import ReactDOM from "react-dom";
import './style.css';
import './Navbar.css';
// import 'animate.css';
import {BiHomeAlt} from "react-icons/bi"
import {AiOutlineCalendar} from "react-icons/ai"
import {FaDumbbell} from "react-icons/fa"


class Navbar extends React.Component {
    render() {
      return(
        <div className="container">
            <nav id="bottom">
                <li><a href="#"><BiHomeAlt/></a></li> 
                <li><a href="#"><AiOutlineCalendar /></a></li>
                <li><a href="#"><FaDumbbell /></a></li>
            </nav>
 
        </div>
      )
    }
  }

export default Navbar;