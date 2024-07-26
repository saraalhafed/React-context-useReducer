/* best practice we but reducer func and initial state in seperate file */
export const initialState = {
    loading: false,
    dog: '',
    error: '',
};
//! best practice is to collect actions in an object
export const DOG_ACTIONS = {
    FAIL: 'FAIL',        /* it shoud be capitallized */
    SUCCESS: 'SUCCESS',
    START: 'START',
  };
//export const dogReducer = (state, actions) 
export const dogReducer = (state, {type, payload}) => {
            /* we make destructuring for DOG_ACTIONS :{type, payload} to use this variable directly ,type instead of DOG_ACTION.type*/
    switch(type) {
        //case "SUCCESS":  /* string it can be wrong  so  we collect them in obj */
        case DOG_ACTIONS.SUCCESS:
      return { ...state, dog: payload, loading: false, error: '' }; /* it will be img loadin , payload update the dog value*/

      case DOG_ACTIONS.FAIL:
        return {...state, dog:"", loading: false, error: payload} /*  payload update the error value */

        case DOG_ACTIONS.START:
      return { ...state, dog: '', loading: true, error: '' };/* fetch data the loading start so we see the spinner*/

        
    }
}
/* payload :is data, can be obj it is an variable it can be anything () */