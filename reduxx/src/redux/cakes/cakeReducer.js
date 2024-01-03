import { BUY_CAKE } from "./cakeType";

const initialState = {
  numOfCakes: 50
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: Math.max(0, state.numOfCakes - action.payload)
      };
    default:
      return state;
  }
};

export default cakeReducer;
