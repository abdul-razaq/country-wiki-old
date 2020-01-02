import { FETCH_ALL_COUNTRIES } from '../actions/types';


const initialState = [];

export default (state = initialState, action) => {

  switch (action.type) {
    case FETCH_ALL_COUNTRIES:
      return [...state, action.payload];  
    default:
      return state;
  }
}
