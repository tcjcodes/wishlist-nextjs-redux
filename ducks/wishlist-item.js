// ACTION TYPES
const actionTypePrefix = 'app/wishlist-item/';
export const ADD_WISHLIST_ITEM = `${actionTypePrefix}ADD_WISHLIST_ITEM`;
export const DELETE_WISHLIST_ITEM = `${actionTypePrefix}DELETE_WISHLIST_ITEM`;
export const UPDATE_WISHLIST_ITEM = `${actionTypePrefix}UPDATE_WISHLIST_ITEM`;

// REDUCER
const exampleInitialState = {
  '[user].W001.0': {
    id: '[user].W001.0',
    name: 'First Item',
    description: 'Lorem ipsum dolores',
    url: 'smile.amazon.com',
    imageUrl: 'http://lorempixel.com/400/200/',
    price: '$25.00',
  },
};

const itemReducer = (itemsState = exampleInitialState, action, id = null) => {
  switch (action.type) {
    case ADD_WISHLIST_ITEM:
      return {
        ...itemsState,
        [id]: {
          id,
          ...action.payload.item,
        },
      };
    case UPDATE_WISHLIST_ITEM:
      const item = itemsState[action.payload.item.id];
      return {
        ...itemsState,
        [item.id]: {
          ...action.payload.item,
        },
      };
    case DELETE_WISHLIST_ITEM:
      return _.filter(itemsState, (item) => item.id !== action.payload.id);
  }
  return itemsState;
};
export default itemReducer;

// ACTION CREATORS
export const addWishlistItem = (id, item) => {
  return {
    type: ADD_WISHLIST_ITEM,
    payload: {
      id, //FIXME rename to wishlistId
      item,
    },
  };
};

export const deleteWishlistItem = (id) => {
  return {
    type: DELETE_WISHLIST_ITEM,
    payload: {
      id, //FIXME rename to itemId
    },
  };
};

export const updateWishlistItem = (wishlistId, item) => {
  return {
    type: UPDATE_WISHLIST_ITEM,
    payload: {
      wishlistId,
      item,
    },
  };
};

// MIDDLEWARE
