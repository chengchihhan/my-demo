import React from 'react';
import BookRow from './BookRow';
import BookCategoryRow from './BookCategoryRow';

class BookTable extends React.Component {
  render() {
    const rows = [];
    let lastCategory = null;
    this.props.books.forEach(function(book) {
      if (book.category !== lastCategory) {
        rows.push(<BookCategoryRow category={book.category} />);
      }
      rows.push(<BookRow name={book.name} price={book.price} popular={book.popular} />)
    })
    return (
      <table>
        <thead>
          <tr>Name</tr>
          <tr>Price</tr>
          <tr>Status</tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

export  default BookTable;
