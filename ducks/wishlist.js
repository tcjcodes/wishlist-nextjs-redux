// ACTION TYPES
import itemReducer, { ADD_WISHLIST_ITEM } from './wishlist-item';

const actionTypePrefix = 'app/wishlist/';
const FETCH_WISHLIST = `${actionTypePrefix}FETCH_WISHLIST`;

// REDUCER
const initialState = {
  name: 'My Wishlist',
  id: '[user].W001',
  createdDate: '2018-04-14',
  items: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WISHLIST:
      return state;
    case ADD_WISHLIST_ITEM:
      const itemId = `${state.id}.${state.items.length}`;
      return {
        ...state,
        items: [...state.items, itemReducer(null, action, itemId)],
      };
  }
  return state;
};
export default reducer;

// ACTION CREATORS
export const fetchWishlist = (id) => {
  return {
    type: FETCH_WISHLIST,
    payload: id,
  };
};

// MIDDLEWARE
