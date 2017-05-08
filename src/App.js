import React from 'react';
import FilterableBookTable from './FilterableBookTable';

const BOOKS = [
  {category: 'Comics & Graphic Novels', price: '$9.99', stocked: true, name: 'Guardians of the Galaxy', popular: true},
  {category: 'Comics & Graphic Novels', price: '$9.99', stocked: true, name: 'Dragon Ball', popular: true},
  {category: 'Fantasy Action & Adventure', price: '$29.99', stocked: false, name: 'Harry Potter And The Order Of The Phoenix', popular: false},
  {category: 'Fantasy Action & Adventure', price: '$9.99', stocked: true, name: 'Harry Potter and the Half-Blood Prince', popular: false},
  {category: 'Science Fiction Adventures', price: '$39.99', stocked: false, name: 'Phasma (Star Wars)', popular: true},
  {category: 'Science Fiction Adventures', price: '$19.99', stocked: true, name: 'Battlefront II: Inferno Squad (Star Wars)', popular: true}
];

class App extends React.Component {
  render() {
    return (
      <FilterableBookTable books={BOOKS} />
    );
  }
}

export default App;
