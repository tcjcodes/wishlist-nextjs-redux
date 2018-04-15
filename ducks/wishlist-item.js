// ACTION TYPES
const actionTypePrefix = 'app/wishlist-item/';
export const ADD_WISHLIST_ITEM = `${actionTypePrefix}ADD_WISHLIST_ITEM`;


// REDUCER
const exampleInitialState = {
  id: '[user].W001.0',
  name: 'First Item',
  description: 'Lorem ipsum dolores',
  url: 'smile.amazon.com',
  imageUrl: 'http://lorempixel.com/400/200/',
  price: '$25.00'
};

const itemReducer = (state = null, action, id) => {
  switch (action.type) {
    case ADD_WISHLIST_ITEM:
      return {
        id,
        ...action.payload.item,
      };
  }
  return state;
};
export default itemReducer;

// ACTION CREATORS
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