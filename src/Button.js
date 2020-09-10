import React, { Component } from 'react';
import Tooltip from "./Tooltip";

export default class Button extends Component {
    constructor(){
        super();
        this.state={
            hovering:false,
            position:'',
        }
    }

    handleMouseOver=()=>{
        console.log(this.state.position);
        this.setState({
            hovering:true,
            position:this.state.position,
        })
    }

    handleMouseOut=()=>{
        this.setState({
            hovering:false,
            position:this.state.position
        })
    }

    handleDropDown=(e)=>{
        this.setState({
            position:e.target.value
        })
    }

    render() {
        const {hovering,position} = this.state;

        return (
            <div className="container">
                <div className="dropdown">
                    <label>Select the Position : </label>
                    <select value={this.state.position} onChange={this.handleDropDown}>
                        <option value="" disabled>Select the position...</option>
                        <option value="top">Top</option>
                        <option value="right">Right</option>
                        <option value="bottom">Bottom</option>
                        <option value="left">Left</option>
                    </select>
                </div>
                <div className="button" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} >
                    <div className="text">Hover Over Me!</div>
                    <div className="tooltip-container">
                        {hovering ? <Tooltip position={position} /> : null}
                    </div>
                </div>
            </div>
        )
    }
}
