var React = require('react');
var ApiUtil = require('../../util/apiUtil.js');
var OnClickOutside = require('react-onclickoutside');
var BoardStore = require('./../../stores/board');
var BoardsDropdownItem = require('./boardsDropdownItem');
var SessionStore = require('./../../stores/session');

var BoardsDropdown = React.createClass({

	mixins: [OnClickOutside],

	contextTypes: {
      router: React.PropTypes.object.isRequired
    },

	getInitialState: function () {
    return { pressed: false, boards: BoardStore.all() };
  },

  isPressed: function () {
		debugger
		this.setState({pressed: !this.state.pressed});
	},

  handleClickOutside: function (e) {
    this.setState({ pressed: false })
  },


	_onChange: function () {
    this.setState({ boards: BoardStore.all() });
  },

	_updateBoards: function () {
		this.setState({ boards: BoardStore.all() });
		this.isPressed;
	},

	componentDidMount: function () {
		this.boardListener = BoardStore.addListener(this._updateBoards, this.isPressed);
		ApiUtil.fetchUserBoards(SessionStore.currentUser().id);
	},

	componentWillUnmount: function () {
		this.boardListener.remove();
	},




  render: function () {
		if (typeof this.state.boards === undefined || this.state.boards.length === 0 ) {
		} else {
			boards = [];
			this.state.boards.forEach(function (board) {
				boards.push( <BoardsDropdownItem board={board} />
				)
				});
		}

		if (!this.state.pressed) {
			return(
				<li id="board-dropdown-button" className="top-buttons" onClick={this.isPressed}>
					ℳ Boards
				</li>
			);
		}

		return (
			<li >
				<div id="board-dropdown-button" className="top-buttons" onClick={this.isPressed}>ℳ Boards</div>
				<div className="board-dropdown">
					<div className="board-dropdown-head">
						<h3>MyBoards</h3>
					</div>
					<div className="board-dropdown-index group">
						<ul>
							{boards}
						</ul>
					</div>
					{this.props.children}
				</div>
			</li>
		);
		}
});

module.exports = BoardsDropdown;
