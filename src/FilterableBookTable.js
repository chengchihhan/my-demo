import React from 'react';
import SearchBar from './SearchBar';
import BookTable from './BookTable';

class FilterableBookTable extends React.component {
  render() {
    return (
      <div>
        <SearchBar />
        <BookTable books={this.props.books} />
      </div>
    )
  }
}

export default FilterableBookTable;
