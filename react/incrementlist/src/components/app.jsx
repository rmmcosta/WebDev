// @ts-check
import React, { Component } from 'react';
import CounterList from './counterList';
import Navbar from './navbar';

class App extends Component {
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
        <Navbar>
          <label htmlFor="selectedCounters">Selected:</label>
          <span id="selectedCounters" className="badge rounded-pill bg-primary ms-1">
            {this.state.counters.filter(c => c.value > 0).length}
          </span>
          <button className="btn btn-primary btn-sm ms-2" onClick={this.onNew}>New</button>
          <button className="btn btn-secondary btn-sm ms-2" onClick={this.onReset}>Reset</button>
        </Navbar>
        <div className="container">
          <CounterList counters={this.state.counters} onChange={this.handleChange} onDelete={this.handleDelete} />
        </div>
      </React.Fragment>);
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
    const newId = newCounters.length === 0 ? 1 : newCounters[newCounters.length - 1].id + 1;
    newCounters.push({ id: newId, value: 0 });
    this.setState({ counters: newCounters });
  }

  onReset = () => {
    let newCounters = this.state.counters.map(c => { c.value = 0; return c; })
    this.setState({ counters: newCounters });
  }
}

export default App;
