import React, { Component } from 'react';
import FeedCard from './feedCard';
export default class FeedDisplay extends Component {
  componentWillMount() {
    if (this.props.params && this.props.params.id) {
      const feed = this.props.feeds.filter((item) => item.id === this.props.params.id)[0];
      if (feed) {
        this.props.refreshActiveFeed(feed);
      }
    }
  }
  componentWillReceiveProps(props) {
    if (props.params && props.params.id) {
      const feed = this.props.feeds.filter((item) => item.id === props.params.id)[0];
      if (feed) {
        this.props.refreshActiveFeed(feed);
      }
    }
  }
  render() {
    const feeds = this.props.activeFeed.items ? this.props.activeFeed.items.map((item, i) => <FeedCard key={i} data={item}/>):''; //eslint-disable-line
    return (
      <div className="col-xs-12 feed-display">
        <h1 className="blog-heading">{this.props.activeFeed.feed ? this.props.activeFeed.feed.title : ''}</h1>
        {feeds}
      </div>
    );
  }
}

FeedDisplay.propTypes = {
  activeFeed: React.PropTypes.object.isRequired,
  params: React.PropTypes.object.isRequired,
  feeds: React.PropTypes.array.isRequired,
  refreshActiveFeed: React.PropTypes.func.isRequired,
};
