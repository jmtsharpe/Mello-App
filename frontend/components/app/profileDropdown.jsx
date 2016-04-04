var React = require('react');
var ApiUtil = require('../../util/apiUtil.js');
var OnClickOutside = require('react-onclickoutside');

var ProfileDropdown = React.createClass({
	mixins: [OnClickOutside],
	  getInitialState: function () {
	    return { pressed: false };
	  },

	  isPressed: function () {
			this.setState({pressed: true});
		},

	  handleClickOutside: function (e) {
	    this.setState({ pressed: false});
	  },




	  render: function () {
	  		if (!this.state.pressed) {
	  			return(
	  				<li className="profile-button top-buttons" onClick={this.isPressed}>
	  					<h2>{this.props.username}</h2>
	  				</li>
	  			);
	  		}

	      return(

					<li className="profile-button top-buttons" onClick={this.isPressed}>
						<h2>{this.props.username}</h2>
						<div className="profile-dropdown" onClick={this.isPressed}>
							<h2>Profile Dropdown</h2>
							<h2 onClick={ApiUtil.logout}>Logout</h2>
						</div>
					</li>
	      );

	  }
});

module.exports = ProfileDropdown;
