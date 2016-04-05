var React = require('react');
var History = require('react-router').History;
var ApiUtil = require('./../util/apiUtil');
var SignUpForm = require('./signUpForm');
var LoginForm = require('./loginForm');

Welcome = React.createClass({

	contextTypes: {
    router: React.PropTypes.object.isRequired
  },

	goToLogin: function () {
    this.context.router.push('login');
  },

	goToSignUp: function () {
    this.context.router.push('signup');
  },

	render: function () {
		return (
		<main>

			<button onClick={this.goToLogin}>Login</button>
			<button onClick={this.goToSignUp}>Sign Up</button>


		</main>
	);

	}

});

module.exports = Welcome;
