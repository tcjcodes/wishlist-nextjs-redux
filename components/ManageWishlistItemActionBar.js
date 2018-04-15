import React from 'react';
import PropTypes from 'prop-types';

const ManageWishlistItemActionBar = ({ itemId, handleEdit, handleDelete }) => (
  <div>
    <button onClick={handleEdit}>Edit</button>
    <button onClick={handleDelete}>Delete</button>
  </div>
);

ManageWishlistItemActionBar.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ManageWishlistItemActionBar;
