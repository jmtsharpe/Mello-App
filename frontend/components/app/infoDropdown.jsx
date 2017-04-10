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
			return (
				<li>
					<div className="profile-button top-buttons" onClick={this.isPressed}>
						<h2>Help!</h2>
					</div>
				</li>
			);
		}

		return (
			<li className="info-button top-buttons" onClick={this.isPressed}>
				<div>
					<h2>Help!</h2>
					<div className="info-dropdown" onClick={this.isPressed}>
						<h2>Mello by <a href="www.jamesmtsharpe.com">James Sharpe</a></h2>
						<br/>
						<p>If <em>you</em> need any help filling your front-end</p>
						<p> or full-stack engineering positions, </p>
						<p> or if you just want to talk</p>
						<p>James Sharpe is the guy for you.</p>
						<br/>
						<p>His info and portfolio can be found here:</p>
						<br/>
						<ul className="contact-links">
							<li><a>Email: hello@jamesmtsharpe.com</a></li>
							<li><a href="http://www.jamesmtsharpe.com">Personal Site</a></li>
							<li><a href="http://github.com/jmtsharpe">Git-Hub</a></li>
							<li><a href="http://www.linkedin.com/in/jmtsharpe">LinkedIn</a></li>
						</ul>
					</div>
				</div>
			</li>
		);

	}
});

module.exports = InfoDropdown;
