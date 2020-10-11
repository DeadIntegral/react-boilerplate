import { SET_NUMBER } from '../actions/actionTypes';

const initState = {
	number: 0
};

const setNumber = (state = initState, action) => {
  if (action.type === SET_NUMBER) {
    return {
      ...state,
      number: action.number,
    };
  } else {
    return state;
  }
};
export default setNumber;
