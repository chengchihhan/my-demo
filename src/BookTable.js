import React, {Component} from 'react';

import BookRow from './BookRow';
import BookCategoryRow from './BookCategoryRow';

export default class BookTable extends Component {

  renderCategories(data) {
    return Object.keys(data).map((category) => {
      const books = data[category].map((book) => (<BookRow key={book.name} book={book} />));
      return [
        <BookCategoryRow key={category} category={category} />,
        ...books
      ];
    });
  }

  renderTableBody() {

    const {books, filterText, bestSellerOnly} = this.props;

    const categoryData = books.filter((book) => {
      return book.name.includes(filterText);
    })
    .filter((book) => {
      if (! bestSellerOnly) {
        return true;
      }
      return (book.popular === bestSellerOnly);
    })
    .reduce((data, book) => {

      const {category} = book;

      if (! data[category]) {
        data[category] = [];
      }
      data[category].push(book);
      return data;
    }, {});

    return this.renderCategories(categoryData);
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Status</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>{this.renderTableBody()}</tbody>
      </table>
    );
  }
}
