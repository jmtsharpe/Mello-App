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
	  					<h2>i</h2>
	  				</li>
	  			);
	  		}

	      return(

					<li className="info-button top-buttons" onClick={this.isPressed}>
						<h2>i</h2>
						<div className="info-dropdown" onClick={this.isPressed}>
							<h2>Info Dropdown</h2>
						</div>
					</li>
	      );

	  }
});

module.exports = ProfileDropdown;
