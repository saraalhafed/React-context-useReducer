import React, { useReducer } from 'react';
import Counter from './Counter';
import { Container  } from 'react-bootstrap';
import CounterWithReducer from './CounterWithReducer';
import { DOG_ACTIONS, dogReducer, initialState } from './DogReducer';
import axios from 'axios';
import spinner from "../assets/Spinner-2.gif"


const ReducerExample = () => {

  const [state, dispatch] = useReducer(dogReducer, initialState)
  const { loading, dog, error } = state;  /* destructuring */

  const getDog = async () => {

    dispatch({type: DOG_ACTIONS.START}) /* loding satrt */

    try{
      const res = await axios.get("https://dog.ceo/api/breeds/image/random");
       //! here we receive an image, now need to update dog value
       dispatch({type: DOG_ACTIONS.SUCCESS, payload: res.data.message })
    }
    catch (error) {
      console.log(error.message);
      dispatch({type: DOG_ACTIONS.FAIL, payload:error.message})
    }
  } 

  return (
    <Container>
     {/* <Counter /> */}
     <CounterWithReducer/>
     <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button onClick={getDog}  style={{ width: '200px', margin: '1rem' }}>New Dog</button>
        {/* if loading  */}
        {loading && (
          <div style={{ textAlign: 'center' }} >
            <img src={spinner} alt="loading" />
          </div>
        )}
        {dog && <img src={dog} alt="dog-image" />}  {/* at first we dont have img so we */}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </Container>
  );
};

export default ReducerExample;
/* useReduce :update state not dirct but behind   logic(functionality  ) */