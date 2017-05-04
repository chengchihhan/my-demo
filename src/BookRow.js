import React from 'react';

class BookRow extends React.component {
  render() {
    let popular = this.props.book.popular ?
      <span style={{color: red}}>Hot</span> :
      <span style={{color: blue}}>New</span>
    return (
      <tr>
        <td>{this.props.book.name}</td>
        <td>{this.props.book.price}</td>
        <td>{popular}</td>
      </tr>
    )
  }
}

export BookRow;
