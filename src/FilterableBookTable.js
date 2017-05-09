import React from 'react';
import SearchBar from './SearchBar';
import BookTable from './BookTable';

class FilterableBookTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      bestSellerOnly: false
    };
  }

  handleFilterTextInput = (filterText) => {
    this.setState({
      filterText
    });
  }

  handleBestSellerOnlyInput = (bestSellerOnly) => {
    this.setState({
      bestSellerOnly
    });
  }

  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} bestSellerOnly={this.state.bestSellerOnly}
          onFilterTextInput={this.handleFilterTextInput}
          onBestSellerOnlyInput={this.handleBestSellerOnlyInput} />
        <BookTable books={this.props.books} filterText={this.state.filterText}
          bestSellerOnly={this.state.bestSellerOnly} />
      </div>
    )
  }
}

export default FilterableBookTable;
