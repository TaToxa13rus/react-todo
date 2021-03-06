
import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

  state = {
    search: ''
  };

  onSearchChange = (e) => {
    const search = e.target.value;
    this.setState({ search });
    this.props.onSearchChange(search);
  };

  render() {
    return (
      <input type="text"
                className="form-control search-input"
                placeholder="type to search"
                onChange={this.onSearchChange}
                value={this.state.search} />
    );
  };
};
