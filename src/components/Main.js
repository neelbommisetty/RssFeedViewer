import React, { Component } from 'react';

import Sidebar from './sidebar';
import FeedDisplay from './feedDisplay';

export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Sidebar {...this.props} />
          {this.props.children ? React.cloneElement({...this.props}.children, {...this.props}) : ''}
        </div>
      </div>
    );
  }
}
Main.propTypes = {
  feeds: React.PropTypes.array.isRequired, //eslint-disable-line
  params: React.PropTypes.object.isRequired, //eslint-disable-line
  refreshActiveFeed: React.PropTypes.func.isRequired,//eslint-disable-line
};
