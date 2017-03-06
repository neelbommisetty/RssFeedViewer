import React, { Component } from 'react';

export default class FeedCard extends Component { //eslint-disable-line
  render() {
    return (
      <article className="feed-card">
        <h2>
          <a href={this.props.data.link} target="_blank">{this.props.data.title}</a>
        </h2>
        <div className="description">{this.props.data.description}</div>
        <div className="author">- By <strong>{this.props.data.author ? this.props.data.author : 'Anonymous'}</strong></div>
      </article>
    );
  }
}

FeedCard.proptypes = {
  data: React.PropTypes.shape({
    link: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    author: React.PropTypes.string,
  }).isRequired,
};
