import React, { Component } from 'react';

import Sidebar from './sidebar';

export default class Main extends Component { //eslint-disable-line
  render() {
    return (
      <div>
        <header>
          <img className="hamburger-menu" onClick={() => { this.props.toggleMenu(!this.props.isMenuActive); }} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNNCwxMGgyNGMxLjEwNCwwLDItMC44OTYsMi0ycy0wLjg5Ni0yLTItMkg0QzIuODk2LDYsMiw2Ljg5NiwyLDhTMi44OTYsMTAsNCwxMHogTTI4LDE0SDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDIgIHMwLjg5NiwyLDIsMmgyNGMxLjEwNCwwLDItMC44OTYsMi0yUzI5LjEwNCwxNCwyOCwxNHogTTI4LDIySDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDJzMC44OTYsMiwyLDJoMjRjMS4xMDQsMCwyLTAuODk2LDItMiAgUzI5LjEwNCwyMiwyOCwyMnoiLz48L3N2Zz4=" alt="hamburger-menu" />
          <div className="logo">RSS Feed Reader</div>
        </header>
        {(() => {
          if (this.props.isMenuActive) {
            return <Sidebar {...this.props} />;
          }
          return '';
        })()}
        <div className="container">
          <div className="row">
            {this.props.children ? React.cloneElement({ ...this.props }.children, { ...this.props }) : ''}
          </div>
        </div>
      </div>
    );
  }
}
Main.propTypes = {
  children: React.PropTypes.object,
  feeds: React.PropTypes.array.isRequired, //eslint-disable-line
  params: React.PropTypes.object.isRequired, //eslint-disable-line
  refreshActiveFeed: React.PropTypes.func.isRequired,//eslint-disable-line
};
