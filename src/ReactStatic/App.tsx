import React, { useState } from 'react';
import { Root, Routes } from 'react-static';
import { Router } from '@reach/router';

function App() {
  if (typeof document !== 'undefined') {
  }

  const [dynamicRoutes, setDynamicRoutes] = useState([]);

  let isLoading = false;

  if (isLoading) {
    return <Root>{/*<GlobalLoader />*/}</Root>;
  }

  return (
    <Root>
      <React.Suspense fallback={<small>Loading</small>}>
        <Router>
          {dynamicRoutes}
          <Routes path='*' />
        </Router>
      </React.Suspense>
    </Root>
  );
}

export default App;
