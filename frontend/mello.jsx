var React = require('react');
var ReactDOM = require('react-dom');


var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var BoardIndex = require('./components/boards/index');
var BoardShow = require('./components/boards/show');
var App = require('./components/boards/app');

var hashHistory = require('react-router').hashHistory;


var routes = (
  <Route path="/" component={App}>
    <Route path="/boards" component={BoardIndex} />
    <Route path="boards/:id" component={BoardShow} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <div>
      <Router history={hashHistory}>
        {routes}
      </Router>
    </div>,
    document.getElementById('root')
  );
});
