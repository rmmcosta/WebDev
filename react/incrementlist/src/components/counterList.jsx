import React, { Component } from 'react';
import Counter from './counter.jsx';

class CounterList extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
            { id: 5, value: 0 }
        ]
    }
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="ms-4">
                        <label htmlFor="selectedCounters">Selected:</label>
                        <span id="selectedCounters" className="badge rounded-pill bg-primary ms-1">
                            {this.state.counters.filter(c => c.value > 0).length}
                        </span>
                        <button className="btn btn-primary btn-sm m-2" onClick={this.onNew}>New</button>
                    </div>
                </nav>
                <div className="container">
                    {this.state.counters.map(
                        counter =>
                            <React.Fragment key={counter.id}>
                                <br />
                                <Counter
                                    counter={counter}
                                    key={counter.id}
                                    onChange={this.handleChange}
                                    onDelete={this.handleDelete}
                                />
                            </React.Fragment>
                    )}
                </div>
            </React.Fragment>
        );
    }
    handleChange = (id, value) => {
        let newCounters = this.state.counters;
        const index = newCounters.findIndex(c => c.id === id);
        if (index !== -1) {
            newCounters[index].value = value;
            this.setState({ counters: newCounters });
        }
    }

    handleDelete = id => {
        this.setState(
            {
                counters: this.state.counters.filter(counter => counter.id !== id)
            }
        );
    }

    onNew = () => {
        let newCounters = this.state.counters;
        const newId = newCounters[newCounters.length - 1].id + 1;
        newCounters.push({ id: newId, value: 0 });
        this.setState({ counters: newCounters });
    }
}

export default CounterList;