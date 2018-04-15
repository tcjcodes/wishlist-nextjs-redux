import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddWishlistItem from './AddWishlistItem';
import WishlistItem from './WishlistItem';

class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowAddItem: false };
  }

  onClickAddItem = () => {
    this.toggleShowAddItem(true);
  };

  onClickCancel = () => {
    this.toggleShowAddItem(false);
  };

  toggleShowAddItem = (isShowAddItem) => {
    this.setState({ isShowAddItem });
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
            handleCancel={this.onClickCancel}
            wishlistId={wishlist.id}
          />
        )}
        {wishlist.items.map(this.renderItems)}
      </div>
    );
  }

  renderItems(item) {
    return <WishlistItem key={item.id} item={item} />;
  }
}

const mapStateToProps = ({ wishlist }) => {
  return {
    wishlist,
  };
};

export default connect(mapStateToProps)(Wishlist);
