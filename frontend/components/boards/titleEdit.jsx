var React = require('react');
var ApiUtil = require('../../util/apiUtil');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var TitleEdit = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	mixins: [LinkedStateMixin],

	blankAttrs: {
		subject: ''
	},

	getInitialState: function () {
		return this.blankAttrs;
	},

	editBoardTitle: function (event) {
		event.preventDefault();
		var board = {};
		Object.keys(this.state).forEach(function (key) {
			{ board[key] = this.state[key]; }
		}.bind(this));
		board.id = this.props.boardId;
		ApiUtil.editBoardTitle(board);
		this.setState(this.blankAttrs);
	},


	render: function () {
		return (
			<div className="edit-board-title">
				<h4 className="edit-board-header">Rename Board</h4>
				<form className='new-title' onSubmit={this.editBoardTitle}>
					<label>Name</label>
					<br />
					<input
						className="board-title-field"
						type='text'
						id='board_subject'
						valueLink={this.linkState("subject")}
					/>
					<br/>
					<button className="submit">Save</button>
				</form>
			</div>
		);
	}
});

module.exports = TitleEdit;
