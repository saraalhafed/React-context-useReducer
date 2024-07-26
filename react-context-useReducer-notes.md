## React Context and useReducer Class Notes

### Introduction to React Context

- **React Context** provides a way to pass data through the component tree without having to pass props down manually at every level.
- It is useful for global state management, like theming, user authentication, and language settings.
- It helps to avoid **props drilling**, where you pass props through many levels of the component tree.

### Creating a Context

- Create a context using `React.createContext`.

Example:

```jsx
import React, { createContext, useState } from 'react';

// Create a Context
const MyContext = createContext();

function MyProvider({ children }) {
  const [state, setState] = useState("Hello, World!");

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
}

function App() {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
}
```

### Consuming a Context

- Context can be consumed using the `useContext` hook or `Context.Consumer`.

Example with `useContext`:

```jsx
import React, { useContext } from 'react';
import { MyContext } from './MyProvider';

function MyComponent() {
  const { state, setState } = useContext(MyContext);

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => setState("Hello, React Context!")}>Change State</button>
    </div>
  );
}
```

Example with `Context.Consumer`:

```jsx
function MyComponent() {
  return (
    <MyContext.Consumer>
      {({ state, setState }) => (
        <div>
          <p>{state}</p>
          <button onClick={() => setState("Hello, React Context!")}>Change State</button>
        </div>
      )}
    </MyContext.Consumer>
  );
}
```

### Introduction to useReducer

- **useReducer** is a hook that is used for state management.
- It is an alternative to `useState` and is preferable when you have complex state logic or when the next state depends on the previous one.

### Using useReducer

- `useReducer` accepts a reducer function and an initial state and returns the current state and a dispatch function.

#### Parameters of useReducer

1. **reducer**: A function that contains your custom state logic. It receives the current state and an action, and returns a new state.
2. **initialState**: The initial state you want to use.
3. **init** (optional): A function to lazily initialize the state.

Example:

```jsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
```

### Reducer Function

- The reducer function receives two parameters:
  1. **state**: The current state.
  2. **action**: An object with a type property and any additional data.

Example:

```jsx
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
```

### Using an Action Types Object

- Instead of using plain strings for action types, you can define them as an object to avoid typos and make the code more maintainable.

Example:

```jsx
const ACTION_TYPES = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return { count: state.count + 1 };
    case ACTION_TYPES.DECREMENT:
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: ACTION_TYPES.INCREMENT })}>Increment</button>
      <button onClick={() => dispatch({ type: ACTION_TYPES.DECREMENT })}>Decrement</button>
    </div>
  );
}
```

### Combining Context and useReducer

- Combining `Context` and `useReducer` provides a powerful pattern for managing global state in a React application.

Example:

```jsx
import React, { createContext, useReducer, useContext } from 'react';

const initialState = { count: 0 };

const ACTION_TYPES = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return { count: state.count + 1 };
    case ACTION_TYPES.DECREMENT:
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const CountContext = createContext();

function CountProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  );
}

function Counter() {
  const { state, dispatch } = useContext(CountContext);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: ACTION_TYPES.INCREMENT })}>Increment</button>
      <button onClick={() => dispatch({ type: ACTION_TYPES.DECREMENT })}>Decrement</button>
    </div>
  );
}

function App() {
  return (
    <CountProvider>
      <Counter />
    </CountProvider>
  );
}
```

### Summary

- **React Context** is used to share state across the entire app or part of it without passing props.
- **useReducer** is useful for managing complex state logic and is an alternative to `useState`.
- The `useReducer` hook takes a reducer function, initial state, and an optional init function.
- The reducer function receives the current state and an action and returns a new state.
- Using an action types object helps to avoid typos and makes the code more maintainable.
- Combining `Context` and `useReducer` can help manage global state efficiently and makes your state management more predictable.