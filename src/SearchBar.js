import React from 'react';

class SearchBar extends React.component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox"/>
          {' '}
          Only show Best Sellers
        </p>
      </form>
    )
  }
}

export SearchBar;
