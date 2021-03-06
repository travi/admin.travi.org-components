import React from 'react';
import {bool} from 'prop-types';
import {Helmet} from 'react-helmet';
import PageLoading from '../../atoms/loading-indicators/page';
import {resourceShape} from '../resource-shapes';

export default function Resource({resource, loading}) {
  return (
    <div>
      <Helmet title={resource.displayName || 'Loading Resource...'} />
      {loading ? <PageLoading /> : <h3>{resource.displayName}</h3>}
    </div>
  );
}

Resource.displayName = 'Resource';

Resource.propTypes = {
  loading: bool.isRequired,
  resource: resourceShape
};
