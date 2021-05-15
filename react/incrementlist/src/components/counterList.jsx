import React from 'react';
import Counter from './counter';

//stateless functional component
const CounterList = ({ counters, onChange, onDelete }) => {
    return (
        counters.map(
            counter =>
                <React.Fragment key={counter.id}>
                    <br />
                    <Counter
                        counter={counter}
                        key={counter.id}
                        onChange={onChange}
                        onDelete={onDelete}
                    />
                </React.Fragment>
        )
    );
}

export default CounterList;