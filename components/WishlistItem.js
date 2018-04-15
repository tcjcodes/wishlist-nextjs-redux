import React, { Component } from 'react';

class WishlistItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    return (
      <div>
        <h3>
          {item.name} <small>{item.id}</small>
        </h3>
        <p>({item.price}) {item.description}</p>
        {item.url && (
          <a href={item.url} target="_blank">
            {item.url}
          </a>
        )}
        {` `}
        {item.imageUrl && (
          <a href={item.imageUrl} title={item.name} target="_blank">
            {item.imageUrl}
          </a>
        )}
      </div>
    );
  }
}

export default WishlistItem;
