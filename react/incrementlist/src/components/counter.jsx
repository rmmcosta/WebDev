import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: 0
    };
    render() {
        return (
            <React.Fragment>
                <span>{this.formatCount()}</span>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button>delete</button>
            </React.Fragment>
        );
    }
    formatCount() {
        const { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }
    increment = () => {
        let newState = this.state;
        newState.value += 1;
        this.setState(newState);
    }
    decrement = () => {
        if (this.state.value !== 0) {
            let newState = this.state;
            newState.value -= 1;
            this.setState(newState);
        }
    }
}

export default Counter;