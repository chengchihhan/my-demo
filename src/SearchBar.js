import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
        />
        <p>
          <input
            type="checkbox"
            value={this.props.bestSellerOnly}
          />
          {' '}
          Only show Best Sellers
        </p>
      </form>
    );
  }
}

export default SearchBar;
