import Helmet from 'react-helmet';
import CircularProgress from 'material-ui/CircularProgress';

export default (React) => {
    function Resource({resource, loading}) {
        return (
            <div>
                <Helmet title={resource.displayName}/>
                {loading || <h3>{resource.displayName}</h3>}
                {loading && <CircularProgress color={'#c80000'} />}
            </div>
        );
    }

    Resource.displayName = 'Resource';

    return Resource;
};
