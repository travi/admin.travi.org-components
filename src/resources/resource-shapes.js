import React from 'react';

export const resourcesShape = React.PropTypes.arrayOf(React.PropTypes.shape({
  id: React.PropTypes.number.isRequired,
  displayName: React.PropTypes.string.isRequired,
  thumbnail: React.PropTypes.shape({
    src: React.PropTypes.string.isRequired
  }),
  links: React.PropTypes.shape({
    self: React.PropTypes.shape({
      href: React.PropTypes.string
    })
  })
}));

export const resourceShape = React.PropTypes.shape({
  displayName: React.PropTypes.string
});
