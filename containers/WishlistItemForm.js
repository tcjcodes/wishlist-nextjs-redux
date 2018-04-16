import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Fields, Form, reduxForm } from 'redux-form';
import _ from 'lodash';
import { getEditingItem, toggleShowEditingItem } from '../ducks/wishlist';
import { addWishlistItem, updateWishlistItem } from '../ducks/wishlist-item';

const FIELDS_CONFIG = {
  name: {
    element: 'input',
    type: 'text',
    label: 'Name',
    placeholder: 'name',
    required: true,
  },
  description: {
    element: 'input',
    type: 'text',
    label: 'Description',
  },
  url: {
    element: 'input',
    type: 'text',
    label: 'URL',
  },
  imageUrl: {
    element: 'input',
    type: 'text',
    label: 'Image URL',
  },
  price: {
    element: 'input',
    type: 'text',
    label: 'Price',
  },
};

class WishlistItemForm extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (values) => {
    const { wishlistId, reset, editing } = this.props;
    if (editing) {
      this.props.updateWishlistItem(wishlistId, values);
      this.props.toggleShowEditingItem(false);
    } else {
      this.props.addWishlistItem(wishlistId, values);
    }
    reset();
  };

  render() {
    const { handleSubmit, pristine, submitting, handleCancel } = this.props;
    return (
      <div>
        <h2>Add New Item</h2>
        <div>
          <Form onSubmit={handleSubmit(this.onSubmit)}>
            <Fields
              names={_.keys(FIELDS_CONFIG)}
              component={this.renderFields}
            />
            <button type="submit" disabled={pristine || submitting}>
              Submit
            </button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </Form>
        </div>
      </div>
    );
  }

  renderFields = (fields) => {
    return (
      <div>
        {_.map(FIELDS_CONFIG, (config, name) =>
          this.renderField(config, fields[name])
        )}
      </div>
    );
  };

  renderField = (fieldConfig, reduxField) => {
    const { label, type, placeholder, required } = fieldConfig;
    const { input, meta: { error, touched } } = reduxField;
    return (
      <div key={input.name}>
        <label>{label}</label>
        <fieldConfig.element
          {...input}
          type={type}
          placeholder={placeholder}
          required={required}
        />
        {touched && error && <p className="error">{error}</p>}
      </div>
    );
  };
}

const validate = (values) => {
  return _.keys(FIELDS_CONFIG)
    .filter(
      (fieldName) => !values[fieldName] && FIELDS_CONFIG[fieldName].required
    )
    .reduce((err, fieldName) => {
      err[fieldName] = 'This field is required';
      return err;
    }, {});
};

const mapStateToProps = (state) => {
  const editingItem = getEditingItem(state);
  return {
    initialValues: editingItem,
    editing: !!editingItem,
  };
};

export default connect(mapStateToProps, {
  addWishlistItem,
  updateWishlistItem,
  toggleShowEditingItem,
})(
  reduxForm({
    form: 'addWishlistItem',
    validate,
    enableReinitialize: true,
  })(WishlistItemForm)
);
