import React, { useReducer, useState } from 'react';

// reducer function has 2 parameters
// paramater-1 is state
//actions. actions is an object that has 2 keys properties as type(each case has another typ :INC do somthing) and payload(to update the state from input)
// actions ={type:"", payload:""}
//stat obj insid the reducer func we have always cases so we use switch
// state = {count:0, user:"John", theme:"dark"}
/*  */
/* depending to typ of action obj i provid functionallity */

const countReducer = (state, actions) => {
    switch(actions.type) {
         case "INC" : return {...state, count: state.count + 1} /* update just count , get all the state than updat just the count */
         case "DEC" : return {...state, count: state.count - 1}
         case 'SET':
            return { ...state, count: actions.payload };   /* typ:what kind of func ,payload : we give new data (value) from input  to update the state */
    }
};

//! initial state
const intialState = {
    count: 0,
    user: 'John',
    theme: 'Dark',
  };

const CounterWithReducer = () => {
  const [counter, setCounter] = useState(0);
 // useReducer is an alternative to useState to handle complex states
  // useReducer takes 2 arguements
   // argument-1 : reducer function
  //argument-2 : initial state
   //! useReducer returns a state and a setter function called dispatch
   const [state, dispatch] = useReducer(countReducer, intialState);
  const [input, setInput] = useState('');
  

 

  return (
    <div>
      <h4>Counter {state.count}</h4>
       {/* dispatch function takes an object as an argument which has type and payload keys */}
      <button onClick={() => dispatch({ type: 'INC' })}>+</button>
      <button onClick={() => dispatch({ type: 'DEC' })}>-</button>
      <br />
      <input
        type="text"
        placeholder="new value"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />                                                  {/* we update the data ,what inside input it show inside the counter in browser */}
       <button onClick={() => dispatch({ type: 'SET', payload: +input })}>
        Set                              {/* dispatch function takes an object as an argument which has type and payload keys */}
      </button>
    </div>
  );
};

export default CounterWithReducer;
/* here both  the component and (reducer func and initial stat) in the same file ,
in dogReeducer (reducer func and initial stat) in seperat file */