import PropTypes from 'prop-types';
import React from 'react';

const WishlistItem = ({ item }) => (
  <div>
    <h3>
      {item.name} <small>{item.id}</small>
    </h3>
    <p>
      (${item.price}) {item.description}
    </p>
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

WishlistItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    url: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.string,
  }),
};

export default WishlistItem;
