import React from 'react';
import Helmet from 'react-helmet';

import PrimaryNav from '../nav/primary-nav';

import '../bootstrap-custom.scss';

export default function Wrap({primaryNav, children}) {
  return (
    <div className="container">
      <Helmet titleTemplate="%s | Travi.org Admin" />
      <PrimaryNav primaryNav={primaryNav} />
      { children }
    </div>
  );
}

Wrap.displayName = 'Wrap';

Wrap.propTypes = {
  primaryNav: React.PropTypes.arrayOf(React.PropTypes.shape({
    path: React.PropTypes.string,
    text: React.PropTypes.string
  })),
  children: React.PropTypes.node
};
