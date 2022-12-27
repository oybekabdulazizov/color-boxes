import React, { Component } from 'react';
import colors from './colors';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currColor: colors[Math.floor(Math.random() * colors.length)]
        }
    }

    render() {
        return (
            <div>
                <button style={{ width: "15rem", height: "15rem", backgroundColor: this.state.currColor.code }}></button>
            </div>
        )
    }
}

export default Box;