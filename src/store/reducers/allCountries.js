import { FETCH_ALL_COUNTRIES } from '../actions/types';


const initialState = [];

export default (state = initialState, action) => {

  switch (action.type) {
    case FETCH_ALL_COUNTRIES:
      return action.payload;  
    default:
      return state;
  }
}
