const initialState = {
  name: 'User name not known',
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
};

export default appReducer;
