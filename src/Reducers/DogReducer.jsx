/* bestpractic  */
export const initialState = {
    loading: false,
    dog: '',
    error: '',
};
//! best practice is to collect actions in an object
export const DOG_ACTIONS = {
    FAIL: 'FAIL',
    SUCCESS: 'SUCCESS',
    START: 'START',
  };
//export const dogReducer = (state, actions) 
export const dogReducer = (state, {type, payload}) => {

    switch(type) {
        //case "SUCCESS":  /* string it can be wrong  so */
        case DOG_ACTIONS.SUCCESS:
      return { ...state, dog: payload, loading: false, error: '' }; /* it will be img loadin */

      case DOG_ACTIONS.FAIL:
        return {...state, dog:"", loading: false, error: payload}

        case DOG_ACTIONS.START:
      return { ...state, dog: '', loading: true, error: '' };/* fetch adta  we see the spinner*/

        
    }
}
