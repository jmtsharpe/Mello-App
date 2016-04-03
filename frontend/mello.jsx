var React = require('react');
var ReactDOM = require('react-dom');


var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var BoardIndex = require('./components/boards/index');
var BoardShow = require('./components/boards/show');
var App = require('./components/boards/app');
var LoginForm = require('./components/loginForm');
var SignUpForm = require('./components/signUpForm');
var ApiUtil = require('./util/apiUtil.js');

var hashHistory = require('react-router').hashHistory;

var SessionStore = require("./stores/session");

var routes = (
  <Route path="/" component={App}>
    <Route path="/boards" component={BoardIndex} onEnter={_requireLoggedIn} />
    <Route path="boards/:id" component={BoardShow} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <div>
      <Router history={hashHistory}>
        {routes}
        <Route path="/login" component={LoginForm}/>
        <Route path="/signup" component={SignUpForm}/>
      </Router>
    </div>,
    document.getElementById('root')
  );
});

function _requireLoggedIn(nextState, replace, asyncCompletionCallback) {
  if (!SessionStore.currentUserHasBeenFetched()) {
    ApiUtil.fetchCurrentUser(_redirectIfNotLoggedIn);
  } else {
    _redirectIfNotLoggedIn();
  }

  function _redirectIfNotLoggedIn() {
    if (!SessionStore.isLoggedIn()) {
      replace("/login");
    }

    asyncCompletionCallback();
  }
}
