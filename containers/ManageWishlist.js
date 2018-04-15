import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleShowAddItem } from '../ducks/wishlist';
import AddWishlistItem from './AddWishlistItem';
import ManageWishlistItem from './ManageWishlistItem';

class ManageWishlist extends Component {
  constructor(props) {
    super(props);
  }

  onClickAddItem = () => {
    this.props.toggleShowAddItem(true);
  };

  onClickAddItemCancel = () => {
    this.props.toggleShowAddItem(false);
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

const mapStateToProps = ({ isShowAddItem, wishlist }) => {
  return {
    wishlist,
  };
};

export default connect(mapStateToProps, { toggleShowAddItem })(ManageWishlist);
