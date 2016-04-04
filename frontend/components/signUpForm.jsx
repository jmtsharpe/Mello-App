var React = require('react');
var ApiUtil = require('../util/apiUtil');

var SignUpForm = React.createClass({
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
      <div>
        <h1>Please Sign Up</h1>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input onChange={this.updateName} type="text" value={this.state.name}/>

          <label htmlFor="password">Password</label>
          <input onChange={this.updatePassword} type="password" value={this.state.password}/>

          <button>Submit</button>
        </form>
      </div>
    );
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var user = {};

    Object.keys(this.state).forEach(function (key) {
      { user[key] = this.state[key]; }
    }.bind(this));

    var router = this.context.router;

    ApiUtil.signUp(user, function() {
      router.push("/");
    });
  },

  updateName: function(e) {
    this.setState({ username: e.currentTarget.value });
  },

  updatePassword: function(e) {
    this.setState({ password: e.currentTarget.value });
  }

});

module.exports = SignUpForm;
