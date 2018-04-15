import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddWishlistItem from './AddWishlistItem';
import ManageWishlistItem from './ManageWishlistItem';

class ManageWishlist extends Component {
  constructor(props) {
    super(props);

    // TODO convert to store
    this.state = { isShowAddItem: false };
  }

  onClickAddItem = () => {
    this.toggleShowAddItem(true);
  };

  onClickAddItemCancel = () => {
    this.toggleShowAddItem(false);
  };

  toggleShowAddItem = (isShowAddItem) => {
    this.setState({ isShowAddItem });
  };

  onClickItemEdit = (itemId) => {
    console.log('edit', itemId);
  };

  onClickItemDelete = (itemId) => {
    console.log('delete', itemId);
  };

  render() {
    const { wishlist } = this.props;
    const { isShowAddItem } = this.state;
    return (
      <div>
        <h1>{wishlist.name}</h1>
        {!isShowAddItem && (
          <button onClick={this.onClickAddItem}>+ Add Item</button>
        )}
        {isShowAddItem && (
          <AddWishlistItem
            handleCancel={this.onClickAddItemCancel}
            wishlistId={wishlist.id}
          />
        )}
        {_.map(wishlist.items, this.renderItems)}
      </div>
    );
  }

  renderItems = (item) => {
    return (
      <ManageWishlistItem
        key={item.id}
        item={item}
      />
    );
  }
}

const mapStateToProps = ({ wishlist }) => {
  return {
    wishlist,
  };
};

export default connect(mapStateToProps)(ManageWishlist);
