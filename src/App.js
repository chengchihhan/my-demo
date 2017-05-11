import React, { Component } from 'react';
import HOC from './HOC';
import Hello from './Hello';

class App extends Component {
  render() {

    const Wrap = HOC(Hello);

    return (
      <div>
        <Wrap />
      </div>
    );
  }
}

export default App;
