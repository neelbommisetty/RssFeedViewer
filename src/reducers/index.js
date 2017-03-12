import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import feeds from './urlsReducer';
import activeFeed from './activeFeedReducer';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({ feeds, activeFeed, routing: routerReducer, isMenuActive: menuReducer, toastr: toastrReducer });

export default rootReducer;
