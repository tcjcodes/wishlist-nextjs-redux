import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startAddingWishlistItem, toggleShowEditingItem } from '../ducks/wishlist';
import ManageWishlistItem from './ManageWishlistItem';
import WishlistItemForm from './WishlistItemForm';

class ManageWishlist extends Component {
  constructor(props) {
    super(props);
  }

  onClickAddItem = () => {
    this.props.startAddingWishlistItem();
  };

  onClickAddItemCancel = () => {
    this.props.toggleShowEditingItem(false);
  };

  render() {
    const { wishlist } = this.props;
    return (
      <div>
        <h1>{wishlist.name}</h1>
        {!wishlist.isShowAddItem && (
          <button onClick={this.onClickAddItem}>+ Add Item</button>
        )}
        {wishlist.isShowAddItem && (
          <WishlistItemForm
            handleCancel={this.onClickAddItemCancel}
            wishlistId={wishlist.id}
          />
        )}
        {_.map(wishlist.items, this.renderItems)}
      </div>
    );
  }

  renderItems = (item) => {
    return <ManageWishlistItem key={item.id} item={item} />;
  };
}

const mapStateToProps = ({ isShowAddItem, wishlist }) => {
  return {
    wishlist,
  };
};

export default connect(mapStateToProps, {
  toggleShowEditingItem,
  startAddingWishlistItem,
})(ManageWishlist);
