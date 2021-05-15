import React, { Component } from 'react';

class Counter extends Component {
    render() {
        const { counter, onDelete } = this.props;
        const btn = "btn btn-sm m-1 min-width-smbtn ";
        const btnSecondary = btn + "btn-secondary";
        const btnDanger = btn + "btn-danger";
        let countClasses = "min-width-badge badge bg-";
        countClasses += counter.value === 0 ? "warning" : "primary";
        return (
            <React.Fragment>
                <span className={countClasses} id={counter.id}>{this.formatCount()}</span>
                <button
                    className={btnSecondary}
                    onClick={this.increment}>+</button>
                <button
                    className={btnSecondary}
                    onClick={this.decrement}>-</button>
                <button
                    className={btnDanger}
                    onClick={() => { onDelete(counter.id) }}>delete</button>
            </React.Fragment>
        );
    }
    formatCount() {
        const { counter } = this.props;
        return counter.value === 0 ? 'Zero' : counter.value;
    }
    increment = () => {
        const { counter, onChange } = this.props;
        onChange(counter.id, counter.value + 1);
    }
    decrement = () => {
        const { counter, onChange } = this.props;
        if (counter.value !== 0) {
            onChange(counter.id, counter.value - 1);
        }
    }
}

export default Counter;