// ACTIONS
const actionTypePrefix = 'app/wishlist/';
const FETCH_WISHLIST = `${actionTypePrefix}FETCH_WISHLIST`;
const ADD_WISHLIST_ITEM = `${actionTypePrefix}ADD_WISHLIST_ITEM`;

const initialState = {
  name: 'My Wishlist',
  id: '[user].W001',
  createdDate: '2018-04-14',
  items: [],
};

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WISHLIST:
      return state;
    case ADD_WISHLIST_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
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

export const addWishlistItem = (id, item) => {
  return {
    type: ADD_WISHLIST_ITEM,
    payload: {
      id,
      item
    },
  };
};

// MIDDLEWARE
