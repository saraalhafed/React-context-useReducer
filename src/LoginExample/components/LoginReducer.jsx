export const initialState = {
    value: '',
    error: '',
  };
  
  export const LOGIN_ACTIONS = {
    INPUT: 'INPUT',
    ERROR: 'ERROR',
  };
  
  export const LoginReducer = (state, { type, payload }) => {
    switch (type) {
      case LOGIN_ACTIONS.INPUT:
        return { ...state, value: payload, error: '' };
      case LOGIN_ACTIONS.ERROR:
        return { ...state, error: payload };
      default:
        return state;
    }
  };
  