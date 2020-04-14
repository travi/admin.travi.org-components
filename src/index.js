import React from 'react';
import {Helmet} from 'react-helmet';

export default function Index() {
  return (
    <div className="jumbotron">
      <Helmet title="Home" />
      <h2>Reference API Client</h2>
      <p>Administration for Travi.org</p>
    </div>
  );
}

Index.displayName = 'Index';
