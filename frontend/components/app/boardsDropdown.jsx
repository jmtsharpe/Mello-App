var React = require('react');
var ApiUtil = require('../../util/apiUtil.js');
var OnClickOutside = require('react-onclickoutside');
var BoardStore = require('./../../stores/board');
var BoardsDropdownItem = require('./boardsDropdownItem');
var SessionStore = require('./../../stores/session');

var BoardsDropdown = React.createClass({
	mixins: [OnClickOutside],
  getInitialState: function () {
    return { pressed: false, boards: BoardStore.all() };
  },

  isPressed: function () {
		this.setState({pressed: !this.state.pressed});
	},

  handleClickOutside: function (e) {
    this.setState({ pressed: false,
		 boards: BoardStore.all()});
  },


	_onChange: function () {
    this.setState({ boards: BoardStore.all() });
  },

	_updateBoards: function () {
		this.setState({ boards: BoardStore.all() });
	},

	componentDidMount: function () {
		this.boardListener = BoardStore.addListener(this._updateBoards);
			ApiUtil.fetchUserBoards(SessionStore.currentUser().id);
	},

	componentWillUnmount: function () {
		this.boardListener.remove();
	},


  render: function () {
		if (typeof this.state.boards === undefined ) {
		} else {
			var boards = this.state.boards.map(function (board) {
				return <BoardsDropdownItem key={board.id} board={board} />;
			}.bind(this));
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
