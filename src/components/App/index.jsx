import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from '../../pages/Home';
import AsteroidDetails from '../../pages/AsteroidDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/details">
          <AsteroidDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
