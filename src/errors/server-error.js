import React from 'react';
import Helmet from 'react-helmet';

export default function ServerError() {
  return (
    <div className="jumbotron">
      <Helmet title="Server Error" />
      <h2>500</h2>
      <p>Server Error</p>
    </div>
  );
}

ServerError.displayName = 'ServerError';
