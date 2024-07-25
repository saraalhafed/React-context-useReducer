
import React, { useState } from 'react'
const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [input, setInput] = useState("")

    const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const update = () => setCounter(+input);
  return <div>

<h4>Counter {counter}</h4>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <br />
      <input type="text" placeholder="new value" value={input}
        onChange={(e) => setInput(e.target.value)} />
      <button onClick={update} >Set</button>
  </div>;
};

export default Counter;
/* usesate: we can use it just  to update the stat ,
alternative useReduser is stroger it update the state with logic beheind  add functinality to the stat */