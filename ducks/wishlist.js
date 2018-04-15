// ACTIONS
const FETCH_WISHLIST = 'app/wishlist/FETCH_WISHLIST';

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
  }
  return state;
};
export default reducer;

// ACTION CREATORS
export const fetchWishlist = (id) => {
  return {
    type: FETCH_WISHLIST,
    payload: id
  }
};

// MIDDLEWARE
