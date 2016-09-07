import React from 'react';
import Helmet from 'react-helmet';
import ResourceList from './list.js';
import PageLoading from '../../../src/atoms/loading-indicators/page';

function ConditionalList({resources, resourceType}) {
    if (resources.length) {
        return <ResourceList resources={resources}/>;
    } else {
        return <p className="alert alert-info">No { resourceType } are available</p>;
    }
}

ConditionalList.displayName = 'ConditionalList';

export default function MaybeList({loading, resourceType, resources}) {
    return (
        <div>
            <Helmet title={resourceType}/>
            {loading ? <PageLoading /> : <ConditionalList resources={resources} resourceType={resourceType}/>}
        </div>
    );
}

MaybeList.displayName = 'MaybeList';

MaybeList.propTypes = {
    resources: React.PropTypes.array.isRequired,
    resourceType: React.PropTypes.string.isRequired,
    loading: React.PropTypes.bool.isRequired
};
