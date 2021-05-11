import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: 0
    }
    render() {
        return (
            <React.Fragment>
                <span>{this.formatCount()}</span>
                <button>+</button>
                <button>-</button>
                <button>delete</button>
            </React.Fragment>
        );
    }
    formatCount() {
        const { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;