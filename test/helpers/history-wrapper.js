/* eslint-disable class-methods-use-this */
import React from 'react';
import {createMemoryHistory} from 'react-router';
import {shape} from 'prop-types';

export default class HistoryWrapper extends React.Component {
  getChildContext() {
    const historyInstance = createMemoryHistory();

    historyInstance.isActive = () => {};
    historyInstance.setRouteLeaveHook = () => {};

    return {
      router: historyInstance
    };
  }

  render() {
    return this.props.children;
  }
}

HistoryWrapper.childContextTypes = {
  router: shape()
};
