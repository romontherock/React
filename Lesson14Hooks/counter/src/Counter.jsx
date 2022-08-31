import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(17);
  return (
    <div className="counter">
      <button className="counter__button" onClick={() => setCounter(counter - 1)}>
        -
      </button>
      <span className="counter__value" onClick={() => setCounter(counter)}>
        {counter}
      </span>
      <button className="counter__button" onClick={() => setCounter(counter + 1)}>
        +
      </button>
    </div>
  );
};

export default Counter;
