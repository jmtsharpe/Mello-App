var React = require('react');
var BoardIndexItem = require('./indexItem');
var BoardStore = require('../../stores/board.js');
var BoardForm = require('./form');
var BoardFormButton = require('./formButton');
var ApiUtil = require('../../util/apiUtil');
var SessionStore = require('../../stores/session');

var BoardIndex = React.createClass({

	getInitialState: function () {
		return {boards: BoardStore.all()};
	},

	_onChange: function () {
		this.setState({ boards: BoardStore.all() });
	},

	_updateBoards: function () {
		this.setState({ boards: BoardStore.all() });
	},

	componentDidMount: function () {
		this.sessionListener = SessionStore.addListener(this._onChange);
		this.boardListener = BoardStore.addListener(this._updateBoards);
		ApiUtil.fetchUserBoards(SessionStore.currentUser().id);
	},

	componentWillUnmount: function () {
		this.sessionListener.remove();
		this.boardListener.remove();
	},

	render: function () {

		if (!this.state.boards) {
			return (<p>Loading boards...</p>);
		}
		var boards = this.state.boards.map(function (board) {
			return <BoardIndexItem key={board.id} board={board} />;
		}.bind(this));

		return (
			<div className="content">
				<div className="board-index-head">
					<h4 className="board-starred-title">☆ Starred Boards</h4>
					<h4 className="board-index-title">☺ MyBoards</h4>
				</div>


				<ul className="board-index group">
					{boards}
					<BoardFormButton />
				</ul>

				{this.props.children}
			</div>
		);
	}

});

module.exports = BoardIndex;
