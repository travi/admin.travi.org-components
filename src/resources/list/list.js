import React from 'react';
import {Link} from 'react-router';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

import styles from './_resourceLists.scss';

export default function ResourceList({resources}) {
    return (
        <ListGroup>{resources.map((resource) => (
            <ListGroupItem key={resource.id}>{(() => {
                if (resource.thumbnail) {
                    return <img src={resource.thumbnail.src} className={styles.thumbnail}/>;
                } else {
                    return '';
                }
            })()}{(() => {
                if (resource.links.self) {
                    return <Link to={resource.links.self.href}>{resource.displayName}</Link>;
                } else {
                    return resource.displayName;
                }
            })()}</ListGroupItem>
        )) }</ListGroup>
    );
}

ResourceList.displayName = 'ResourceList';
