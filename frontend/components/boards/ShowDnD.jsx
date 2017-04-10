var React = require('react');
var ApiUtil = require('./../../util/apiUtil');

var TitleButton = require('./titleButton');

var SessionStore = require('./../../stores/session');
var BoardStore = require('./../../stores/board');
var CardStore = require('./../../stores/card');
var TaskStore = require('./../../stores/task');

var PropTypes = React.PropTypes;
var DragSource = require('react-dnd').DragSource;
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');

var CardForm = require('./../cards/form');
var CardSlotIndex = require('./../cards/cardSlotIndex');

BoardShow = React.createClass ({

	getInitialState: function () {
		return {board: BoardStore.find(this.props.params.id) };
	},

	_onChange: function () {
		this.setState({
			board: BoardStore.find(this.props.params.id)
		});
	},

	componentWillReceiveProps: function (newProps) {
		this.setState({ board: BoardStore.find(this.props.params.id) })
	},

	componentDidMount: function () {
		this.cardListener = CardStore.addListener(this._onChange);
		this.boardListener = BoardStore.addListener(this._onChange);
		ApiUtil.fetchSingleBoard(this.props.params.id);
	},

	componentWillUnmount: function () {
		this.cardListener.remove();
		this.boardListener.remove();
	},

	render: function () {
		if (!this.state.board || !this.state.board.cards) {
			return (<p>Loading board...</p>);
		}

		return (
			<div id="board" className="group">
				<div className="board-bar group">
					<ul>
						<TitleButton
							subject={this.state.board.subject}
							boardId={this.state.board.id}
						/>
					</ul>
				</div>
				<div className="board-content group">
					<CardSlotIndex
						boardId={this.state.board.id}
						cards={this.state.board.cards}
						umber={this.state.board.cards.length}
					/>
				</div>
			</div>
		);
	}

});

module.exports = BoardShow;
