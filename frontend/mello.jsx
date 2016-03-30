var React = require('react');
var ReactDOM = require('react-dom');


var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var BoardIndex = require('./components/boards/index');

var hashHistory = require('react-router').hashHistory;

document.addEventListener("DOMContentLoaded", function () {
  // old version, you didn't need to pass in hashHistory or browserHistory]

  ReactDOM.render(
    <div>
      <Router history={hashHistory}>
        <Route path="/" component={BoardIndex} />
      </Router>

    </div>,
    document.getElementById('root')
  );
});
