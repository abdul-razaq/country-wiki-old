import { SELECT_COUNTRY } from '../actions/types';


const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_COUNTRY:
      return action.payload;  
    default:
      return state;
  }
}
