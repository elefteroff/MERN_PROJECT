import './App.css';
import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import Newconsult from './Components/Newconsult';
import Viewconsult from './Components/Viewconsult';
import Dashboard from './Components/Dashboard';
import Landing from './Components/Landing';
import Success from './Components/Success';
import Newclient from './Components/Newclient';

function App() {
  return (
    <div className="App">
      <Switch>

        <Route exact path="/consultants/new/client">
          <Newclient />
        </Route>

        <Route exact path="/consultants/new">
          <Newconsult />
        </Route>

        <Route exact path="/consultants/success">
          <Success />
        </Route>

        <Route exact path="/consultants/:id">
          <Viewconsult />
        </Route>

        <Route exact path="/consultants">
          <Dashboard />
        </Route>

        <Route exact path="/">
          <Landing />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
