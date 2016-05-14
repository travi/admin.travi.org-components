import Helmet from 'react-helmet';
import createResourceList from './list.js';

export default (React) => {
    const ResourceList = createResourceList(React);

    function ConditionalList({resources, resourceType}) {
        if (resources.length) {
            return <ResourceList resources={resources}/>;
        } else {
            return <p className="alert alert-info">No { resourceType } are available</p>;
        }
    }

    function MaybeList(props) {
        return (
            <div>
                <Helmet title={props.resourceType}/>
                <ConditionalList {...props} />
            </div>
        );
    }

    MaybeList.displayName = 'MaybeResourceList';

    return MaybeList;
};
