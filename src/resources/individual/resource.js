import Helmet from 'react-helmet';
import PageLoading from '../../atoms/loading-indicators/page';

export default (React) => {
    function Resource({resource, loading}) {
        return (
            <div>
                <Helmet title={resource.displayName}/>
                {loading || <h3>{resource.displayName}</h3>}
                {loading && <PageLoading />}
            </div>
        );
    }

    Resource.displayName = 'Resource';

    return Resource;
};
