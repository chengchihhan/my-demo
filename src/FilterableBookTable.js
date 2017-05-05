import React from 'react';
import SearchBar from './SearchBar';
import BookTable from './BookTable';

class FilterableBookTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterInputText: '',
      bestSellerOnly: false
    }
  }
  render() {
    return (
      <div>
        <SearchBar
          filterInputText={this.state.filterInputText}
          bestSellerOnly={this.state.bestSellerOnly}
        />
        <BookTable
          books={this.props.books}
          filterInputText={this.state.filterInputText}
          bestSellerOnly={this.state.bestSellerOnly}
        />
      </div>
    )
  }
}

export default FilterableBookTable;
