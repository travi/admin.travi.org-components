import createPrimaryNav from '../nav/primary-nav';

import '../../../../../resources/scss/theme.scss';

export default (React) => {
    const PrimaryNav = createPrimaryNav(React);

    function Wrap({primaryNav, children}) {
        return (
            <div className="container">
                <PrimaryNav primaryNav={primaryNav}/>
                { children }
            </div>
        );
    }
    Wrap.displayName = 'Wrap';

    return Wrap;
};
