var React = require('react');
var ApiUtil = require('../util/apiUtil');
var SignUpForm = require('./signUpForm');

var LoginForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      username: "",
      password: ""
    };
  },

  render: function() {
    return (
			<div className="sign-in-sign-up">
	      <div>
	        <h1>Please Log in</h1>

	        <form onSubmit={this.handleSubmit}>
	          <label htmlFor="name">Name</label>
	          <input onChange={this.updateName} type="text" value={this.state.name}/>

	          <label htmlFor="password">Password</label>
	          <input onChange={this.updatePassword} type="password" value={this.state.password}/>

	          <button>Submit</button>
	        </form>
	      </div>
			</div>
    );
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var router = this.context.router;

    ApiUtil.login(this.state, function() {
      router.push("/boards");
    });
  },

  updateName: function(e) {
    this.setState({ username: e.currentTarget.value });
  },

  updatePassword: function(e) {
    this.setState({ password: e.currentTarget.value });
  }

});

module.exports = LoginForm;
