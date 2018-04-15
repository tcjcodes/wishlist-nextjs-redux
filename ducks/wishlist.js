// ACTION TYPES
import itemReducer, {
  ADD_WISHLIST_ITEM,
  DELETE_WISHLIST_ITEM,
  UPDATE_WISHLIST_ITEM,
} from './wishlist-item';

const actionTypePrefix = 'app/wishlist/';
const FETCH_WISHLIST = `${actionTypePrefix}FETCH_WISHLIST`;
const TOGGLE_SHOW_ADD_ITEM = `${actionTypePrefix}TOGGLE_SHOW_ADD_ITEM`;

// REDUCER
const initialState = {
  name: 'My Wishlist',
  id: '[user].W001',
  createdDate: '2018-04-14',
  isShowAddItem: false,
  nextItemIdNumber: 1,
  items: {
    '[user].W001.0': {
      id: '[user].W001.0',
      name: 'First Item',
      description: 'Lorem ipsum dolores',
      url: 'smile.amazon.com',
      imageUrl: 'http://lorempixel.com/400/200/',
      price: '25.00',
    },
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WISHLIST:
      return state;
    case TOGGLE_SHOW_ADD_ITEM:
      return {
        ...state,
        isShowAddItem: action.payload,
      };
    case ADD_WISHLIST_ITEM:
      const itemId = `${state.id}.${state.nextItemIdNumber}`;
      return {
        ...state,
        nextItemIdNumber: state.nextItemIdNumber + 1,
        items: { ...state.items, [itemId]: itemReducer(null, action, itemId) },
      };
    case UPDATE_WISHLIST_ITEM:
      return {
        ...state,
        nextItemIdNumber: state.nextItemIdNumber + 1,
        items: { ...state.items, [itemId]: itemReducer(state.item, action) },
      };
    case DELETE_WISHLIST_ITEM:
      return {
        ...state,
        items: _.filter(state.items, (item) => item.id !== action.payload.id),
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

export const toggleShowAddItem = (isShowAddItem) => {
  return {
    type: TOGGLE_SHOW_ADD_ITEM,
    payload: isShowAddItem,
  };
};

// MIDDLEWARE
