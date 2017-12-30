import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { MainPage, CreatePageTemplate } from 'components';
import 'styles/main.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={MainPage}/>
        <Route path="/create" component={CreatePageTemplate}/>
      </div>
    );
  }
}

export default App;
