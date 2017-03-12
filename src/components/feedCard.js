import React, { Component } from 'react';

export default class FeedCard extends Component { //eslint-disable-line
  render() {
    return (
      <article className=" feed-card col-xs-12 col-sm-6 col-md-4">
        <h2 className="article-heading">
          <a href={this.props.data.link} target="_blank">{this.props.data.title}</a>
        </h2>
        <img src={this.props.data.thumbnail ? this.props.data.thumbnail : 'http://lorempixel.com/540/240'} alt={this.props.data.title} className="img img-responsive" />
        <p className="description">{this.props.data.description}</p>
        <span className="author">- By <strong>{this.props.data.author ? this.props.data.author : 'Anonymous'}</strong></span>
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
