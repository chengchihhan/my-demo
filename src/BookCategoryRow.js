import React from 'react';

class BookCategoryRow extends React.component {
  render() {
    return (
      <tr><th>{this.props.category}</th></tr>
    )
  }
}

export BookCategoryRow;
