import { SEARCH_COUNTRY } from '../actions/types';


const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    
    case SEARCH_COUNTRY:
      return action.payload;
  
    default:
      return state;
  }
}
