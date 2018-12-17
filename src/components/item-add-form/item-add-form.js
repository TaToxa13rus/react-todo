import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddFrom extends Component {

  render() {
    const { onItemAdded } = this.props;

    return (
      <div className="item-add-form">
        <button
          className="btn btn-outline-secondary"
          onClick={() => onItemAdded('Hello World')}>
          Add Item
        </button>
      </div>
    );
  };

}