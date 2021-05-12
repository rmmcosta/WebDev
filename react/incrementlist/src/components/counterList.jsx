import React, { Component } from 'react';
import Counter from './counter.jsx';

class CounterList extends Component {
    state = {
        positiveCounters: []
    }
    render() {
        return (
            <React.Fragment>
                <span>Selected: {this.state.positiveCounters.length}</span>
                <br />
                <Counter id={1} key={1} onChange={this.onChangeValue} />
                <br />
                <Counter id={2} key={2} onChange={this.onChangeValue} />
                <br />
                <Counter id={3} key={3} onChange={this.onChangeValue} />
                <br />
                <Counter id={4} key={4} onChange={this.onChangeValue} />
            </React.Fragment>
        );
    }
    onChangeValue = (id, value) => {
        let newState = this.state;
        if (value === 0)
            newState.positiveCounters = newState.positiveCounters.filter(x => x !== id);
        else if (newState.positiveCounters.findIndex(x => x === id) === -1)
            newState.positiveCounters.push(id);
        this.setState(newState);
    }
}

export default CounterList;