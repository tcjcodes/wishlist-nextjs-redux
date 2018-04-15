import React, { Component } from 'react';

class WishlistItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
	  const { item } = this.props;
		return (<div>{item.name}</div>);
	}
}

export default WishlistItem;
