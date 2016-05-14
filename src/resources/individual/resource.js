import Helmet from 'react-helmet';

export default (React) => {
    function Resource({resource}) {
        return (
            <h3>
                <Helmet title={resource.displayName}/>
                {resource.displayName}
            </h3>
        );
    }
    Resource.displayName = 'Resource';

    return Resource;
};
