import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ScrollTemplate, MainPage, CreatePage, NotFoundPage } from 'components';
import 'styles/main.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ScrollTemplate}/>
          <Route path="/main" component={MainPage}/>
          <Route path="/create" component={CreatePage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;