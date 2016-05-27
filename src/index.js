import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import App from './containers/App';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import OnboarderComponent from './components/OnboarderComponent';
import QuestionComponent from './components/QuestionComponent';

const Semantic = require('semantic/dist/semantic.js');
const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/questions/complete/" component={QuestionComponent} />
        <Route path="/questions/:id" component={QuestionComponent} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
