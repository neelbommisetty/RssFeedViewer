import React, { Component } from 'react';
import { Link } from 'react-router';
import FeedListItem from './feedListItem';

export default class Sidebar extends Component { //eslint-disable-line
  constructor(props) {
    super(props);
    this.addUrl = this.addUrl.bind(this);
  }
  addUrl(e) {
    e.preventDefault();
    this.props.addUrl(this.input.value);
    this.form.reset();
  }
  render() {
    const urls = this.props.feeds.map((feed, i) => <FeedListItem { ...this.props } i={i} key={feed.id} data={feed}/>);
    return (
      <div className="col-xs-4 sidebar">
        <form className="form-inline url-form" ref={(form) => { this.form = form; }}>
          <div className="form-group">
            <input type="url" className="form-control" ref={(input) => { this.input = input; }} placeholder="example.com/feed" />
          </div>
          <button type="submit" className="btn btn-default" onClick={this.addUrl}>Add</button>
        </form>
        {urls}
      </div>
    );
  }
}
Sidebar.propTypes = {
  addUrl: React.PropTypes.func.isRequired,
  feeds: React.PropTypes.array.isRequired,
};
