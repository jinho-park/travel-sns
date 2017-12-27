import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from 'components/home/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
      </div>
    );
  }
}

export default App;
