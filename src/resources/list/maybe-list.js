import React from 'react';
import {string, bool} from 'prop-types';
import {Helmet} from 'react-helmet';
import ResourceList from './list';
import {resourcesShape} from '../resource-shapes';
import PageLoading from '../../atoms/loading-indicators/page';

function ConditionalList({resources, resourceType}) {
  if (resources.length) {
    return <ResourceList resources={resources} />;
  }

  return (
    <p className="alert alert-info">
      {`No ${resourceType} are available`}
    </p>
  );
}

ConditionalList.displayName = 'ConditionalList';

ConditionalList.propTypes = {
  resources: resourcesShape.isRequired,
  resourceType: string.isRequired
};

export default function MaybeList({loading, resourceType, resources}) {
  return (
    <div>
      <Helmet title={resourceType} />
      {loading ? <PageLoading /> : <ConditionalList resources={resources} resourceType={resourceType} />}
    </div>
  );
}

MaybeList.displayName = 'MaybeList';

MaybeList.propTypes = {
  resources: resourcesShape.isRequired,
  resourceType: string.isRequired,
  loading: bool.isRequired
};
