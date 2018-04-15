import React, { Component } from 'react';
import { connect } from 'react-redux';
import ManageWishlistItemActionBar from '../components/ManageWishlistItemActionBar';
import WishlistItem from '../components/WishlistItem';
import { deleteWishlistItem } from '../ducks/wishlist-item';

class ManageWishlistItem extends Component {
  constructor(props) {
    super(props);
  }

  handleClickEdit = () => {
    // this.props.handleEdit(this.props.item.id);
    console.log('editing', this.props.item.id);
  };

  handleClickDelete = () => {
    this.props.deleteWishlistItem(this.props.item.id);
  };

  render() {
    const { item } = this.props;
    return (
      <div>
        <WishlistItem item={item} />
        <ManageWishlistItemActionBar
          itemId={item.id}
          handleDelete={this.handleClickDelete}
          handleEdit={this.handleClickEdit}
        />
        <div>
          <button onClick={this.handleClickEdit}>Edit</button>
          <button onClick={this.handleClickDelete}>Delete</button>
        </div>
      </div>
    );
  }
}

export default connect(null, { deleteWishlistItem })(ManageWishlistItem);
