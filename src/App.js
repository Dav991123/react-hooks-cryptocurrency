import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from './components/common/Header';
import List from './components/List/List';
import Detail from './components/Detail/Detail';
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
            <Route path="/currency/:id" component={Detail} />
        </Switch>
    </div>
  );
}

export default withRouter(App);
