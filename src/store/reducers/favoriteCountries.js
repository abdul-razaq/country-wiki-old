import { FAVORITE_COUNTRY } from '../actions/types';


const initialState = [];

export default (state = initialState, action) => {

  switch (action.type) {
    case FAVORITE_COUNTRY:
      return [...state, action.payload];
    default:
      return state;
  }
}
