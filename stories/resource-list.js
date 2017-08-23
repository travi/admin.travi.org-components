import React from 'react';
import storyRouter from 'storybook-router';
import {withInfo} from '@storybook/addon-info';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {mount} from 'enzyme';
import {assert} from 'chai';
import {storiesOf, linkTo, specs} from '../.storybook/facade-storybook';
import {describe, it} from '../.storybook/facade-mocha';
import ResourceList from '../src/resources/list/maybe-list';

storiesOf('Resource List', module)
  .addDecorator(story => (
    <MuiThemeProvider>
      {story()}
    </MuiThemeProvider>
  ))
  .addDecorator(storyRouter({
    '/users/travi': linkTo('Resource Details', 'person'),
    '/resources/generic': linkTo('Resource Details', 'generic resource')
  }))
  .add(
    'empty list',
    withInfo('this is the empty state')(() => {
      const list = <ResourceList resourceType="foo" resources={[]} loading={false} />;

      specs(() => describe('empty list', () => {
        it('should show a message explaining that no resources are available', () => {
          const wrapper = mount(list);
          const alert = wrapper.find('p');

          assert.equal(alert.text(), 'No foo are available');
        });
      }));

      return list;
    })
  )
  .add(
    'loading',
    withInfo('this is the loading state')(() => <ResourceList resourceType="foo" resources={[]} loading={true} />)
  )
  .add(
    'rides list',
    withInfo('list of rides')(() => (
      <ResourceList
        resourceType="rides"
        loading={false}
        resources={[
          {id: 1, displayName: 'corvette', links: {self: {href: '/resources/generic'}}},
          {id: 2, displayName: 'truck', links: {self: {href: '/resources/generic'}}},
          {id: 3, displayName: 'camaro', links: {self: {href: '/resources/generic'}}}
        ]}
      />
    ))
  )
  .add(
    'persons list',
    withInfo('list of persons')(() => (
      <ResourceList
        resourceType="persons"
        loading={false}
        resources={[
          {
            id: 1,
            displayName: 'Matt Travi',
            thumbnail: {src: 'https://www.gravatar.com/avatar/f69785efc7d990da20f1ab49fc2a6648?size=32'},
            links: {self: {href: '/users/travi'}}
          }
        ]}
      />
    ))
  );
