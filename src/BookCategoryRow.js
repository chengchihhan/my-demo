import React from 'react';

class BookCategoryRow extends React.Component {
  render() {
    return (
      <tr><th>{this.props.category}</th></tr>
    )
  }
}

export default BookCategoryRow;
