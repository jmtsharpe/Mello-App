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
		// var boards = this.state.boards.map(function (board) {
		// 	return <BoardDropdownItem key={board.id} board={board} />;
		// }.bind(this));

		if (!this.state.pressed) {
			return(
				<li className="board-dropdown-button top-buttons" onClick={this.isPressed}>
					Boards
				</li>
			);
		}


		return (
			<li className="board-dropdown-button top-buttons" onClick={this.isPressed}>Boards
				<div className="board-dropdown">
					<div className="board-index-head">
						<h3>MyBoards</h3>
					</div>
					<div className="board-dropdown-index group">
						<ul>
							boards
						</ul>
					</div>
					{this.props.children}
				</div>
			</li>
		);
		}
});

module.exports = ProfileDropdown;
