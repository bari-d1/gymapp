import React from "react";
import "./Homepage.css";
import "./style.css";
import {BiHomeAlt} from "react-icons/bi"
import {AiOutlineCalendar} from "react-icons/ai"
import {FaDumbbell} from "react-icons/fa"

let index = 0;
let exc_list = ["Planks", "Push Ups", "Bench", "Treadmill", "Pull Ups", "Stretches"];
let percentages = []
let progress_bar_width = 0.8*414; //This is static rn
let progress_content = document.getElementById("progress_content");
// progress_content.style.display = "none";
let progress_bar = document.getElementById("progress_bar");
let boxes = [false, false, false, false, false, false];

class Homepage extends React.Component{
    // constructor(){
    //     this.current_progress = "0";
    //     this.exc_list = ["Planks", "Push Ups", "Bench", "Treadmill", "Pull Ups", "Stretches"];
    // }
    
    clicked(){
        // .style.textDecoration = "line-through";
        document.getElementById("progress_content").style.display = "block";
        percentages = []
        let percent = 0
        for (let m=0; m<exc_list.length; m++){
            percent += progress_bar_width/exc_list.length
            percentages.push(percent)
        }
        document.getElementById("progress_content").style.width = percentages[index] + "px"
        index++
    }



    render(){
        return (
            <>
                <div id="container">
                    <div id="holder">
                        <div id="top">
                            <h3>Day 11</h3>
                        </div>
                        <div id="middle">
                            <h2>Workout B</h2>
                            <section id="options">
                                <button className="box" onClick={this.clicked}>Planks</button>
                                <button className="box" onClick={this.clicked}>Push Ups</button>
                                <button className="box" onClick={this.clicked}>Bench</button>
                                <button className="box" onClick={this.clicked}>Treadmill</button>
                                <button className="box" onClick={this.clicked}>Pull Ups</button>
                                <button className="box" onClick={this.clicked}>Stretches</button>
                            </section>
                            {/* Need to add the progress bar */}
                            <section id="progress">
                                {/* <svg width="300" height="20">
                                    <rect id="total" width="300" height="20"></rect>
                                    <rect id="sofar" width="30" height="20"></rect>
                                </svg> */}
                                <div id="progress_bar">
                                    <div id="progress_content" className="display">
                
                                    </div>
                                </div>
                            </section>
                        </div>
                        <nav id="bottom">
                            {/* We can use href="target" to link a webpage to itself */}
                            <li><a href="#"><BiHomeAlt /></a></li> 
                            <li><a href="#"><AiOutlineCalendar /></a></li>
                            <li><a href="#"><FaDumbbell /></a></li>
                            {/* <button><BiHomeAlt /></button>
                            <button><AiOutlineCalendar /></button>
                            <button><FaDumbbell /></button> */}
                        </nav>
                    </div>
                </div>
            </>
        );
    }
}


export default Homepage;
