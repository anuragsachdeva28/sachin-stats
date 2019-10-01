const initialState = {};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE":
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default fetchReducer;
