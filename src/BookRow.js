import React from 'react';

class BookRow extends React.Component {
  render() {
    let status = this.props.book.popular ?
      <span style={{color: 'red'}}>Hot!</span> :
      <span style={{color: 'blue'}}>New!</span>;
    return (
      <tr>
        <td>{this.props.book.name}</td>
        <td>{this.props.book.price}</td>
        <td>{status}</td>
      </tr>
    )
  }
}

export default BookRow;
