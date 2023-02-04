import React from "react";
import "./Homepage.css";
import "./style.css";
import {BiHomeAlt} from "react-icons/bi"
import {AiOutlineCalendar} from "react-icons/ai"
import {FaDumbbell} from "react-icons/fa"


class Homepage extends React.Component{
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
                                <input type="checkbox" id="_1"/>
                                <label for="_1">Planks</label><br />
                                <input type="checkbox" id="_2"/>
                                <label for="_2">Push Ups</label><br />
                                <input type="checkbox" id="_3"/>
                                <label for="_3">Bench</label><br />
                                <input type="checkbox" id="_4"/>
                                <label for="_4">Treadmill</label><br />
                                <input type="checkbox" id="_5"/>
                                <label for="_5">Pull Ups</label><br />
                                <input type="checkbox" id="_6"/>
                                <label for="_6">Stretches</label><br />
                            </section>
                            {/* Need to add the progress bar */}
                        </div>
                        <div id="bottom">
                            <button><BiHomeAlt /></button>
                            <button><AiOutlineCalendar /></button>
                            <button><FaDumbbell /></button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default Homepage;
