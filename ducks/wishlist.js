import { createSelector } from 'reselect';

// ACTION TYPES
import itemReducer, {
  ADD_WISHLIST_ITEM,
  DELETE_WISHLIST_ITEM,
  UPDATE_WISHLIST_ITEM,
  updateWishlistItem,
} from './wishlist-items';

const actionTypePrefix = 'app/wishlist/';
const FETCH_WISHLIST = `${actionTypePrefix}FETCH_WISHLIST`;
const TOGGLE_SHOW_EDITING_ITEM = `${actionTypePrefix}TOGGLE_SHOW_EDITING_ITEM`;
const SET_EDITING_ITEM = `${actionTypePrefix}SET_EDITING_ITEM`;

// REDUCER
const initialState = {
  name: 'My Wishlist',
  id: '[user].W001',
  createdDate: '2018-04-14',
  isShowAddItem: false,
  nextItemIdNumber: 1,
  editingItem: null,
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

    case TOGGLE_SHOW_EDITING_ITEM:
      return {
        ...state,
        isShowAddItem: action.payload,
      };
    case SET_EDITING_ITEM: {
      return {
        ...state,
        editingItem: action.payload,
      };
    }

    case ADD_WISHLIST_ITEM:
      const itemId = `${state.id}.${state.nextItemIdNumber}`;
      return {
        ...state,
        nextItemIdNumber: state.nextItemIdNumber + 1,
        items: itemReducer(state.items, action, itemId),
      };
    case UPDATE_WISHLIST_ITEM:
    case DELETE_WISHLIST_ITEM:
      return {
        ...state,
        items: itemReducer(state.items, action),
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

export const toggleShowEditingItem = (isShowAddItem) => {
  return {
    type: TOGGLE_SHOW_EDITING_ITEM,
    payload: isShowAddItem,
  };
};

export const setEditingItem = (itemId) => {
  return {
    type: SET_EDITING_ITEM,
    payload: itemId,
  };
};

export const startAddingWishlistItem = () => {
  return (dispatch) => {
    dispatch(setEditingItem(null));
    dispatch(toggleShowEditingItem(true));
  };
};

export const startEditingWishlistItem = (itemId) => {
  return (dispatch) => {
    dispatch(setEditingItem(itemId));
    dispatch(toggleShowEditingItem(true));
  };
};
// MIDDLEWARE

// SELECTORS
export const getWishlist = (state) => state.wishlist;

export const getEditingItem = createSelector(
  getWishlist,
  (wishlist) => wishlist.editingItem && wishlist.items[wishlist.editingItem]
);
