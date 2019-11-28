import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard, Aboutus } from './pages';
import { Loading } from './components';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Loading />
          <Switch>
            <Route strict path="/dashboard" component={Dashboard} />
            <Route strict path="/about-us" component={Aboutus} />
            <Route strict component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}
