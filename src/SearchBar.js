import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show Best Sellers
        </p>
      </form>
    );
  }
}

export default SearchBar;
