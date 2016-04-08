var React = require('react');
var ReactDOM = require('react-dom');

var Modal = require('react-modal');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var BoardIndex = require('./components/boards/index');
var BoardShow = require('./components/boards/show');
var App = require('./components/app/app');
var LoginForm = require('./components/loginForm');
var SignUpForm = require('./components/signUpForm');
var ApiUtil = require('./util/apiUtil.js');
var Welcome = require('./components/welcome');
var BoardShowDnD = require('./components/boards/ShowDnD');

var hashHistory = require('react-router').hashHistory;

var SessionStore = require("./stores/session");

var routes = (
  <Route path="/" component={App} onEnter={_requireLoggedIn}>
    <Route path="/boards" component={BoardIndex} onEnter={_requireLoggedIn} />
    <Route path="boards/:id" component={BoardShow} onEnter={_requireLoggedIn} />
  </Route>
);

var dragRoutes = (
  <Route path="/" component={App} onEnter={_requireLoggedIn}>
    <Route path="/boards" component={BoardIndex} onEnter={_requireLoggedIn} />
    <Route path="boards/:id" component={BoardShowDnD} onEnter={_requireLoggedIn}/>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
	var container = document.getElementById("root");
  Modal.setAppElement(container);

  ReactDOM.render(
    <div>
      <Router history={hashHistory}>
        {dragRoutes}
				<Route path="/welcome" component={Welcome} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignUpForm} />
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
      replace("/welcome");
    }

    asyncCompletionCallback();
  }
}
