var React = require('react');
var History = require('react-router').History;
var SessionStore = require('./../../stores/session');
var TaskStore = require('./../../stores/task');
var BoardStore = require('./../../stores/board');
var CardStore = require('./../../stores/card');
var ApiUtil = require('./../../util/apiUtil');
var ProfileDropdown = require('./profileDropdown');
var BoardsDropdown = require('./boardsDropdown');
var InfoDropdown = require('./infoDropdown');
var SearchDropdown = require('./searchDropdown');
var OnClickOutside = require('react-onclickoutside');


var LinkedStateMixin = require('react-addons-linked-state-mixin');



var App = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	mixins: [LinkedStateMixin, OnClickOutside],

	getInitialState: function () {
		return {
		children: this.props.children,
		currentUser: SessionStore.currentUser(),
		search: false,
		openSearch: false,
		searchValue: "",
		foundBoards: [] 
		};
	},

	handleClickOutside: function () {
		this.setState({ openSearch: false, search: false })
	},

	goHome: function () {
		this.context.router.push('');
	},

	goToBoards: function () {
		this.context.router.push('boards');
	},

	logOut: function () {

	},


	componentDidMount: function () {
		this.sessionStoreToken = SessionStore.addListener(this.handleChange);
		this.handleChange();
	},

	componentWillUnmount: function() {
		this.sessionStoreToken.remove();
	},

	handleChange: function () {
		if (SessionStore.isLoggedIn()) {
			this.setState({ currentUser: SessionStore.currentUser() });
		} else {
			this.context.router.push("/welcome");
		}
	},

	resetOpenSearch: function () {
		this.setState({ openSearch: false });
		console.log(this.state.openSearch);
	},

	findBoards: function (e) {
		e.preventDefault();
		this.resetOpenSearch();

		var foundBoards = BoardStore.findBySubject(this.state.searchValue);
			this.setState({ openSearch: false}, function () {
			this.setState({ search: false, openSearch: true, foundBoards: foundBoards, searchValue: "" });
		});
	},

	initSearch: function () {
		this.setState({ search: true })
	},

	render: function () {

		if (this.state.search) {
		var search =
			<div className="search-form-div" >
				<form className="search-form" onSubmit={this.findBoards}>
					<input
						className="search-input-field"
						type="text"
						id="card_subject"
						defaultValue="Search..."
						valueLink={this.linkState("searchValue")}
					/>
					<br/>
				</form>
			</div>;
		} else {
			var search = 
				<div className="top-buttons" onClick={this.initSearch}>
					Search
				</div>;
		};

		if (this.state.openSearch) {
			return (
				<div>
					<header className="over-head group">
						<nav className="nav-bar">
							<ul className="over-head-left">
								<BoardsDropdown />
									<li>
										{search}
									</li>
								<SearchDropdown boards={this.state.foundBoards} open={this.state.openSearch} onClick={this.handleClickOutside}/>
							</ul>
							<ul className="over-head-right">

								<ProfileDropdown username={this.state.currentUser.username}/>
								<InfoDropdown />
							</ul>
							<div className="over-head-logo" onClick={this.goToBoards}>
								ℳello
							</div>
						</nav>
					</header>
					{this.props.children}
				</div>
			);
		}

		return (
			<div>
				<header className="over-head group">
					<nav className="nav-bar">
						<ul className="over-head-left">
							<BoardsDropdown />
							<li>
								{search}
							</li>
						</ul>
						<ul className="over-head-right">
							<ProfileDropdown username={this.state.currentUser.username}/>
							<InfoDropdown />
						</ul>
						<div className="over-head-logo" onClick={this.goToBoards}>
							ℳello
						</div>
					</nav>
				</header>
				{this.props.children}
			</div>
		);
	}
});

module.exports = App;
