import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { PageTemplate } from 'components';
import 'styles/main.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={PageTemplate}/>
      </div>
    );
  }
}

export default App;
