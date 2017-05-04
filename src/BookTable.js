import React from 'react';
import BookRow from './BookRow';
import BookCategoryRow from './BookCategoryRow';

class BookTable extends React.Component {
  render() {
    const rows = [];
    let lastCategory = null;
    this.props.books.forEach(function(book) {
      if (book.category !== lastCategory) {
        rows.push(<BookCategoryRow key={book.category} category={book.category} />);
      }
      rows.push(<BookRow key={book.name} name={book.name} price={book.price} popular={book.popular} />)
      lastCategory = book.category;
    })
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

export  default BookTable;
