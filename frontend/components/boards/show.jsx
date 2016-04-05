var React = require('react');
var BoardStore = require('./../../stores/board');
var SessionStore = require('./../../stores/session');
var ApiUtil = require('./../../util/apiUtil');
var CardForm = require('./../cards/form');
var CardIndex = require('./../cards/index');
var CardStore = require('./../../stores/card');
var TaskStore = require('./../../stores/task');
var TitleButton = require('./titleButton');


var BoardShow = React.createClass({

  getInitialState: function () {
    return {board: BoardStore.find(this.props.params.id) };
  },

  _onChange: function () {
    this.setState({
      board: BoardStore.find(this.props.params.id)
    });
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchSingleBoard(newProps.params.id);
  },

  componentDidMount: function () {
    this.boardListener = BoardStore.addListener(this._onChange);
		this.cardListener = CardStore.addListener(this.handleAdditions);
		this.taskListener = TaskStore.addListener(this.handleAdditions);
    ApiUtil.fetchSingleBoard(this.props.params.id);
  },

	handleAdditions: function () {
		ApiUtil.fetchSingleBoard(this.props.params.id);
	},

  componentWillUnmount: function () {
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
						<TitleButton subject={this.state.board.subject} boardId={this.state.board.id} />
					</ul>
				</div>
				<div className="board-content group">
          <CardIndex boardId={this.state.board.id} cards={this.state.board.cards} />
				</div>
      </div>
    );
  }
});

module.exports = BoardShow;
