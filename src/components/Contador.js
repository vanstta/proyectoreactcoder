import React, {Component} from "react";
import {MostarContador} from "./MostrarContador";

export class Contador extends Component {
    state = {count: 0};
    render () {
        return (
            <div>
                <p>Mi contador: {this.state.count}</p>
                <button onClick={() => {
                    this.setState ({ count: this.state.count + 1});
                  
                }}
                >
                Click 
                </button>
            </div>
        )
    }
}

export default Contador