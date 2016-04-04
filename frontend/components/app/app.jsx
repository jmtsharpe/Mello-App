var React = require('react');
var History = require('react-router').History;
var SessionStore = require('./../../stores/session');
var ApiUtil = require('./../../util/apiUtil');
var ProfileDropdown = require('./profileDropdown');


var App = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

	getInitialState: function () {
		return {currentUser: SessionStore.currentUser()};
	},

  goHome: function () {
      this.context.router.push('');
    },

  goToBoards: function () {
    this.context.router.push('boards');
  },

	logOut: function () {

	},

	componentDidMount: function() {
    this.sessionStoreToken = SessionStore.addListener(this.handleChange);
    this.handleChange();
  },

  componentWillUnmount: function() {
    this.sessionStoreToken.remove();
  },

	handleChange: function() {
		if (SessionStore.isLoggedIn()) {
			this.setState({ currentUser: SessionStore.currentUser() });
		} else {
			this.context.router.push("/login");
		}
	},

  render: function () {
    return (
      <div>
        <header className="over-head group">
          <nav className="nav-bar">
            <ul className="over-head-left">
              <li className="board-options top-buttons"
                  onClick={this.goToBoards}>
                  Boards
              </li>
              <li>Search</li>
            </ul>
            <ul className="over-head-right top-buttons">

							<ProfileDropdown username={this.state.currentUser.username}/>
							something
            </ul>
            <div className="over-head-logo" onClick={this.goHome}>
              Mello
            </div>
          </nav>
        </header>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
