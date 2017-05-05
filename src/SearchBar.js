import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    this.handleBestSellerOnlyInputChange = this.handleBestSellerOnlyInputChange.bind(this);
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }
  handleBestSellerOnlyInputChange(e) {
    this.props.onBestSellerOnlyInput(e.target.checked);
  }
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextInputChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.bestSellerOnly}
            onChange={this.handleBestSellerOnlyInputChange}
          />
          {' '}
          Only show Best Sellers
        </p>
      </form>
    );
  }
}

export default SearchBar;
