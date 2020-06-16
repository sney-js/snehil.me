import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import * as PAGES from 'pages';
import CachedResponses from './contentful/CachedResponses';
import Layout from './containers/Layout';
import './styles/main.scss';

CachedResponses.getInstance();

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route path='/project/:projectId' component={PAGES.projectDetail} />
          <Route path='/project' exact component={PAGES.project} />
          <Route path='/' exact component={PAGES.index} />
          <Route path='*' component={PAGES.error} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
