import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createHashHistory } from 'history';
import './styles/main.scss';
import Button from "./elements/Button";

const history = createHashHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/rewards' component={() => <h1>sdfdf</h1>} />
        <Route path='/' component={() => <Button>csvxxxsdfdf</Button>} />
      </Switch>
    </Router>
  );
}

export default App;
