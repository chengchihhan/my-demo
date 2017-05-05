import React from 'react';
import SearchBar from './SearchBar';
import BookTable from './BookTable';

class FilterableBookTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      bestSellerOnly: false
    }
  }
  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          bestSellerOnly={this.state.bestSellerOnly}
        />
        <BookTable
          books={this.props.books}
          filterText={this.state.filterText}
          bestSellerOnly={this.state.bestSellerOnly}
        />
      </div>
    )
  }
}

export default FilterableBookTable;
