import React, { Component } from 'react';
import { Link } from 'react-router';
import {toastr} from 'react-redux-toastr'

export default class FeedListItem extends Component {
  constructor(props) {
    super(props);
    this.removeFeed = this.removeFeed.bind(this);
  }
  removeFeed(e) {
    e.preventDefault();
    if (this.props.params.id != this.props.data.id) {
      this.props.removeLink(this.props.i)
    } else {
      console.log(toastr);
      toastr.error('Error', 'Cannot remove the active url');
    }
  }
  render() {
    const classes = (id) => {
      if (this.props.params.id == this.props.data.id) {
        return 'feed-list-item active';
      } else {
        return 'feed-list-item';
      }
    };
    return (
      <div className={classes(this.props.data.id)}>
        <Link to={() => `/${this.props.data.id}`}>{this.props.data.feed.url}</Link>
        <a className="remove-link" onClick={this.removeFeed}>X</a>
      </div>
    );
  }
}