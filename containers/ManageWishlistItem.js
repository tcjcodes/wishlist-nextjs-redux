import React, { Component } from 'react';
import { connect } from 'react-redux';
import WishlistItem from '../components/WishlistItem';
import { startEditingWishlistItem } from '../ducks/wishlist';
import { deleteWishlistItem } from '../ducks/wishlist-items';

class ManageWishlistItem extends Component {
  constructor(props) {
    super(props);
  }

  handleClickEdit = () => {
    this.props.startEditingWishlistItem(this.props.item.id);
  };

  handleClickDelete = () => {
    this.props.deleteWishlistItem(this.props.item.id);
  };

  render() {
    const { item } = this.props;
    return (
      <div>
        <WishlistItem item={item} />
        <div>
          <button onClick={this.handleClickEdit}>Edit</button>
          <button onClick={this.handleClickDelete}>Delete</button>
        </div>
      </div>
    );
  }
}

export default connect(null, { deleteWishlistItem, startEditingWishlistItem })(ManageWishlistItem);
