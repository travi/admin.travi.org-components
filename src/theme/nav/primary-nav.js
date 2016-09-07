import React from 'react';
import {IndexLink} from 'react-router';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import styles from './_navbar.scss';

export default function PrimaryNav({primaryNav}) {
    return (
        <Navbar className={styles.navbar}>
            <Navbar.Header>
                <Navbar.Brand>
                    <h1 className={styles['site-title']}>
                        <IndexLink className={styles['navbar-brand']} to="/">Travi</IndexLink>
                    </h1>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    {primaryNav.map((resourceType) => (
                        <LinkContainer to={resourceType.path} key={resourceType.text}>
                            <NavItem>
                                {resourceType.text}
                            </NavItem>
                        </LinkContainer>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

PrimaryNav.displayName = 'PrimaryNav';
