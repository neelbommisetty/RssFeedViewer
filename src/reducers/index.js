import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import feeds from './urlsReducer';
import activeFeed from './activeFeedReducer';

const rootReducer = combineReducers({ feeds, activeFeed, routing: routerReducer, toastr: toastrReducer });

export default rootReducer;
