var React = require('react');
var ApiUtil = require('../../util/apiUtil.js');
var OnClickOutside = require('react-onclickoutside');

var ProfileDropdown = React.createClass({

	contextTypes: {
    router: React.PropTypes.object.isRequired
  },

	mixins: [OnClickOutside],
	  getInitialState: function () {
	    return { pressed: false };
	  },

	  isPressed: function () {
			this.setState({pressed: !this.state.pressed});
		},

	  handleClickOutside: function (e) {
	    this.setState({ pressed: false});
	  },

		logout: function () {
			ApiUtil.logout(function () {
	      this.context.router.push("/welcome");
	    }.bind(this));
		},


	  render: function () {
	  		if (!this.state.pressed) {
	  			return(
	  				<li className="group">
							<div className="profile-button group" onClick={this.isPressed}>
								<div className="profile-thumb group">
									<h2 >
										{this.props.username[0]}
									</h2>
								</div>
								<div className="profile-name group">
									<h2>
										{this.props.username}
									</h2>
								</div>
							</div>
	  				</li>
	  			);
	  		}

	      return(

					<li className="profile-button" onClick={this.isPressed}>
						<h2>{this.props.username}</h2>
						<div className="profile-dropdown" onClick={this.isPressed}>
							<h2>Profile Dropdown</h2>
							<h2 onClick={this.logout}>Logout</h2>
						</div>
					</li>
	      );

	  }
});

module.exports = ProfileDropdown;
