import React from 'react';
import {Link} from 'react-router';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {resourcesShape} from '../resource-shapes';
import styles from './_resourceLists.scss';

export default function ResourceList({resources}) {
  return (
    <ListGroup>{resources.map(({id, thumbnail, displayName, links}) => (
      <ListGroupItem key={id}>
        {thumbnail ? <img src={thumbnail.src} className={styles.thumbnail} alt={`${displayName}'s avatar`} /> : ''}
        {links.self ? <Link to={links.self.href}>{displayName}</Link> : displayName}
      </ListGroupItem>
    )) }</ListGroup>
  );
}

ResourceList.displayName = 'ResourceList';

ResourceList.propTypes = {
  resources: resourcesShape.isRequired
};
