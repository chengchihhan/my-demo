import React, { Component } from 'react';
import HOC from './HOC';
import Hello from './Hello';
import Bye from './Bye';

class App extends Component {
  render() {

    const Wrap = HOC(Hello);
    const Wrap2 = HOC(Bye);

    return (
      <div>
        <Wrap />
        <Wrap2 />
      </div>
    );
  }
}

export default App;
