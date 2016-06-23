import Helmet from 'react-helmet';

import createPrimaryNav from '../nav/primary-nav';

import '../bootstrap-custom.scss';

export default (React) => {
    const PrimaryNav = createPrimaryNav(React);

    function Wrap({primaryNav, children}) {
        return (
            <div className="container">
                <Helmet titleTemplate="%s | Travi.org Admin"/>
                <PrimaryNav primaryNav={primaryNav}/>
                { children }
            </div>
        );
    }
    Wrap.displayName = 'Wrap';

    return Wrap;
};
