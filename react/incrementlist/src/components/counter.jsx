import React, { Component } from 'react';

class Counter extends Component {
    state = {
        id: 0,
        value: 0
    };
    constructor(props) {
        super(props);
        this.state.id = this.props.id;
    }
    render() {
        return (
            <React.Fragment>
                <span id={this.state.id}>{this.formatCount()}</span>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={() => { this.props.onDelete(this.state.id) }}>delete</button>
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
        this.props.onChange(this.state.id, newState.value);
    }
    decrement = () => {
        if (this.state.value !== 0) {
            let newState = this.state;
            newState.value -= 1;
            this.setState(newState);
            this.props.onChange(this.state.id, newState.value);
        }
    }
}

export default Counter;