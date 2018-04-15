import React, { Component } from 'react';
import { connect } from 'react-redux';
import WishlistItem from './WishlistItem';

class Wishlist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { wishlist } = this.props;
    return (
      <div>
        <h1>{wishlist.name}</h1>
        {wishlist.items.map(this.renderItems)}
      </div>
    );
  }

  renderItems(item) {
    return <WishlistItem item={item} />;
  }
}

const mapStateToProps = ({ wishlist }) => {
	return {
    wishlist
	};
};

export default connect(mapStateToProps)(Wishlist);
