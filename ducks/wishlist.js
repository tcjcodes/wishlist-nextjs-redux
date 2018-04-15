// ACTION TYPES
import itemReducer, { ADD_WISHLIST_ITEM, DELETE_WISHLIST_ITEM } from './wishlist-item';

const actionTypePrefix = 'app/wishlist/';
const FETCH_WISHLIST = `${actionTypePrefix}FETCH_WISHLIST`;

// REDUCER
const initialState = {
  name: 'My Wishlist',
  id: '[user].W001',
  createdDate: '2018-04-14',
  items: [
    {
      id: '[user].W001.0',
      name: 'First Item',
      description: 'Lorem ipsum dolores',
      url: 'smile.amazon.com',
      imageUrl: 'http://lorempixel.com/400/200/',
      price: '$25.00',
    },
  ],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WISHLIST:
      return state;
    case ADD_WISHLIST_ITEM:
      const itemId = `${state.id}.${state.items.length}`;
      return {
        ...state,
        items: [ ...state.items, itemReducer(null, action, itemId) ],
      };
    case DELETE_WISHLIST_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
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
