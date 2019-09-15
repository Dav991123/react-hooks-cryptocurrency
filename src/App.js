import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from './components/common/Header';
import List from './components/List/List';
import './App.css';

const App = (props) => {
  const {location} = props;
  return (
    <div className="App">
        <Header />
        <Switch>
            <Route 
              path={location.pathname === '/' ? '/' : '/page/:id'} 
              component={List}
            />
        </Switch>
    </div>
  );
}

export default withRouter(App);
