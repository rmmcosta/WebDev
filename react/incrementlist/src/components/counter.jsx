import React, { Component } from 'react';

class Counter extends Component {
    render() {
        const btn = "btn btn-sm m-1 min-width-smbtn ";
        const btnSecondary = btn + "btn-secondary";
        const btnDanger = btn + "btn-danger";
        let countClasses = "min-width-badge badge bg-";
        countClasses += this.props.counter.value === 0 ? "warning" : "primary";
        return (
            <React.Fragment>
                <span className={countClasses} id={this.props.counter.id}>{this.formatCount()}</span>
                <button
                    className={btnSecondary}
                    onClick={this.increment}>+</button>
                <button
                    className={btnSecondary}
                    onClick={this.decrement}>-</button>
                <button
                    className={btnDanger}
                    onClick={() => { this.props.onDelete(this.props.counter.id) }}>delete</button>
            </React.Fragment>
        );
    }
    formatCount() {
        const { counter } = this.props;
        return counter.value === 0 ? 'Zero' : counter.value;
    }
    increment = () => {
        this.props.onChange(this.props.counter.id, this.props.counter.value + 1);
    }
    decrement = () => {
        const { counter } = this.props;
        if (counter.value !== 0) {
            this.props.onChange(counter.id, counter.value - 1);
        }
    }
}

export default Counter;