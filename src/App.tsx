import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './styles/main.scss';
import * as PAGES from 'pages';
import CachedResponses from "./contentful/CachedResponses";

CachedResponses.getInstance();

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/project/:projectId' component={PAGES.projectDetail} />
        <Route path='/project' exact component={PAGES.project} />
        <Route path='/' exact component={PAGES.index} />
        <Route path='*'  component={PAGES.error} />
      </Switch>
    </Router>
  );
}

export default App;
