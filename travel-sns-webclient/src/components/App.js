import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { ScrollTemplate } from 'components';
import 'styles/main.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ScrollTemplate}/>
      </div>
    );
  }
}

export default App;