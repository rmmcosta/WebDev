import React, { Component } from 'react';
import Counter from './counter.jsx';
import 'bootstrap/dist/css/bootstrap.css';

class CounterList extends Component {
    state = {
        positiveCounters: [],
        counters: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 }
        ]
    }
    render() {
        return (
            <React.Fragment>
                <h4>Selected:</h4><span className="badge badge-primary">{this.state.positiveCounters.length}</span>
                <button className="button button-primary" onClick={this.onNew}>New</button>
                {this.state.counters.map(
                    counter =>
                        <React.Fragment key={counter.id}>
                            <br />
                            <Counter
                                id={counter.id}
                                key={counter.id}
                                onChange={this.onChangeValue}
                                onDelete={this.onDelete}
                            />
                        </React.Fragment>
                )}
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

    onDelete = id => {
        this.setState(
            {
                counters: this.state.counters.filter(counter => counter.id !== id),
                positiveCounters: this.state.positiveCounters.filter(pc => pc !== id)
            }
        );
    }

    onNew = () => {
        let newCounters = this.state.counters;
        newCounters.push({ id: newCounters.length + 1 });
        this.setState({ counters: newCounters });
    }
}

export default CounterList;