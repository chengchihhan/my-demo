import React from 'react';

class BookRow extends React.Component {
  render() {
    let status = this.props.book.popular ?
      <span style={{color: 'red'}}>Hot!</span> :
      <span style={{color: 'blue'}}>New!</span>;
    let stock = this.props.book.stocked ?
      <span>In stock!</span> :
      <span style={{color: 'red'}}>Out of stock!</span>;
    return (
      <tr>
        <td>{this.props.book.name}</td>
        <td>{this.props.book.price}</td>
        <td>{status}</td>
        <td>{stock}</td>
      </tr>
    )
  }
}

export default BookRow;
