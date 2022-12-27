import React, { Component } from 'react';
import colors from './colors';
import { getRandomColor } from './helpers';
import './Box.css';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currColor: getRandomColor(colors)
        }
        this.handleClick = this.handleClick.bind(this);
    }

    changeColor() {
        let newColor;

        do {
            newColor = getRandomColor(colors);
        } while (newColor === this.state.currColor);

        this.setState({ currColor: newColor });
    }

    handleClick() {
        this.changeColor();
    }

    render() {
        return (
            <div className="Box">
                <button style={{ width: "15rem", height: "15rem", backgroundColor: this.state.currColor.code }} onClick={this.handleClick}></button>
            </div>
        )
    }
}

export default Box;