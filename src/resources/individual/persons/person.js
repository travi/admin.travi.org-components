import React from 'react';
import Helmet from 'react-helmet';
import PageLoading from '../../../../src/atoms/loading-indicators/page';

import styles from './_h-card.scss';

export default function Person({person, loading}) {
  return (
    <div>
      <Helmet title={person ? person.displayName : 'Loading person...'} />

      {loading && <PageLoading />}
      {loading ||
      <div className={`resource h-card panel panel-default ${styles['h-card']}`}>
        <h3 className="p-name panel-heading">{person.displayName}</h3>
        <div className="container-fluid panel-body">
          <dl className="col-sm-6">
            <dt>First Name</dt>
            <dd className="p-given-name">{person.name.first}</dd>
            <dt>Last Name</dt>
            <dd className="p-family-name">{person.name.last}</dd>
            <dt>Username</dt>
            <dd className="p-nickname">{person.id}</dd>
          </dl>
          <figure className="col-sm-6">
            <img
              src={person.avatar.src}
              height={person.avatar.size}
              width={person.avatar.size}
              alt={person.displayName}
              className="img-rounded u-photo"
            />
          </figure>
        </div>
      </div>
      }
    </div>
  );
}

Person.displayName = 'Person';

Person.propTypes = {
  loading: React.PropTypes.bool,
  person: React.PropTypes.shape({
    id: React.PropTypes.string,
    displayName: React.PropTypes.string,
    name: React.PropTypes.shape({
      first: React.PropTypes.string,
      last: React.PropTypes.string
    }).isRequired
  })
};

