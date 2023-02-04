import React from "react"
import ReactDOM from "react-dom"
import './Welcomepage.css';
import layer0 from "./images/layer0.png"

class Welcomepage extends React.Component {
    render() {
      return(
        <div className="conatiner">
            <div className="greeting">
                <h1>Welcome Dayo</h1>
            </div>
            <div className="imageholder">
                <img src={layer0} className="image" alt="strong guy" />
            </div>
            <div className="proceed">
                <button>Continue</button>
            </div>
        </div>
      ) 
    }
  }

export default Welcomepage;