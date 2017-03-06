import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

// import the root reducer
import rootReducer from './reducers/index';

// create an object for the default data
const defaultState = {};
if (localStorage.getItem('feed') && localStorage.getItem('feed') != 'undefined') {
  defaultState.feeds = JSON.parse(localStorage.getItem('feed'));
}

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk, routerMiddleware(browserHistory)));

export const history = syncHistoryWithStore(browserHistory, store);
if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
