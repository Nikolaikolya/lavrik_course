import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Counter = ({ min, max }) => {
  let [current, setCurrent] = useState(min);

  const increment = (current) => current + 1 < max ? current + 1 : current = max;
  const decrement = (current) => current - 1 > min ? current - 1 : current = min;
  const changeInput = (value) => current = value.replace(/[^+\d]/g, '');

  return (
    <div>
      <h1>Hello 1</h1>
      

      <button onClick={() => setCurrent(increment)}>Increment</button>
      <input type="text" value={current} onChange={event => setCurrent(changeInput(event.target.value))} />
      <button onClick={() => setCurrent(decrement)}>Decrement</button>
    </div>
  );
};

Counter.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};

export default Counter;