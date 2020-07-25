import React from 'react';

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
        <Navigatio />
        <Navigation />
        <Navigation />
        <Navigation />
        <Navigation />
        <Navigation />
        <Navigation />
        <Navigation />
        <Navigation />
        <Navigation />
        {/* End of site-wrap one div would be extra */}
      </div>
    </>
  );
}

export default App;