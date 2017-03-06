import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import store, { history } from './store';

// Import Components
import App from './components/App';
import FeedDisplay from './components/feedDisplay';

const router = (
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <Route path="/:id" component={FeedDisplay} />
        </Route>
      </Router>
      <ReduxToastr
        transitionIn="fadeIn"
        transitionOut="fadeOut"
      />
    </div>
  </Provider>
);

render(router, document.getElementById('root'));
