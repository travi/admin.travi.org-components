import React from 'react';
import Helmet from 'react-helmet';

export default function NotFound() {
  return (
    <div className="jumbotron">
      <Helmet title="Page Not Found" />
      <h2>404</h2>
      <p>Page Not Found</p>
    </div>
  );
}

NotFound.displayName = 'NotFound';
