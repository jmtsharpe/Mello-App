var React = require('react');
var ApiUtil = require('../../util/apiUtil.js');
var OnClickOutside = require('react-onclickoutside');

var InfoDropdown = React.createClass({
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




	  render: function () {
	  		if (!this.state.pressed) {
	  			return(
	  				<li>
							<div className="profile-button top-buttons" onClick={this.isPressed}>
	  						<h2>Help!</h2>
							</div>
	  				</li>
	  			);
	  		}

	      return(

					<li className="info-button top-buttons" onClick={this.isPressed}>
						<div>
							<h2>Help!</h2>
							<div className="info-dropdown" onClick={this.isPressed}>
								<h2>I need somebody. HELP! Not just anybody. HELP! You know I need someone. HeeEEeeelp!</h2>
							</div>
						</div>
					</li>
	      );

	  }
});

module.exports = InfoDropdown;
