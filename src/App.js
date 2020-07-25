import React from 'react';
import { Navigation } from './views/nav/navigation';
import { TopNav } from './views/nav/top-nav';

function App() {
  return (
    <>
      <div id="overlayer" />
      <div className="loader">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <div className="site-wrap">
        <TopNav />
        <Navigation />
      </div>
    </>
  );
}

export default App;