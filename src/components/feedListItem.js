import React, { Component } from 'react';
import { Link } from 'react-router';
import { toastr } from 'react-redux-toastr';

export default class FeedListItem extends Component {
  constructor(props) {
    super(props);
    this.removeFeed = this.removeFeed.bind(this);
  }
  removeFeed(e) {
    e.preventDefault();
    if (this.props.params.id !== this.props.data.id) {
      this.props.removeLink(this.props.i);
    } else {
      toastr.error('Error', 'Cannot remove the active url');
    }
  }
  render() {
    const classes = () => {
      if (this.props.params.id === this.props.data.id) {
        return 'feed-list-item active';
      }
      return 'feed-list-item';
    };
    return (
      <div className={classes()}>
        <Link to={() => `/${this.props.data.id}`}>{this.props.data.feed.url}</Link>
        <button className="remove-link" onClick={this.removeFeed}>X</button>
      </div>
    );
  }
}
FeedListItem.propTypes = {
  params: React.PropTypes.object.isRequired,
  data: React.PropTypes.object.isRequired,
  removeLink: React.PropTypes.func.isRequired,
  i: React.PropTypes.number.isRequired,
};
