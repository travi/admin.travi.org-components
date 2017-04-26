import {number, string, shape, arrayOf} from 'prop-types';

export const resourcesShape = arrayOf(shape({
  id: number.isRequired,
  displayName: string.isRequired,
  thumbnail: shape({
    src: string.isRequired
  }),
  links: shape({
    self: shape({
      href: string
    })
  })
}));

export const resourceShape = shape({
  displayName: string
});
