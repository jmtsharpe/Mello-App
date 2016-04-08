var React = require('react');
var BoardStore = require('./../../stores/board');
var SessionStore = require('./../../stores/session');
var ApiUtil = require('./../../util/apiUtil');
var CardForm = require('./../cards/form');
var CardIndex = require('./../cards/index');
var CardStore = require('./../../stores/card');
var TaskStore = require('./../../stores/task');
var PropTypes = React.PropTypes;
var TitleButton = require('./titleButton');
// var DragSource = require('react-dnd').DragSource;
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');
var CardSlotIndex = require('./../cards/cardSlotIndex');
var CardIndexItem = require('./../cards/indexItem');
var CardSlot = require('./../cards/cardSlot');

BoardShow = React.createClass ({
	// propTypes: {
  //   CardPosition: PropTypes.arrayOf(
  //     PropTypes.number.isRequired
  //   ).isRequired
  // },

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



	// renderCard: function (i) {
	// 	return ( <CardIndexItem position={i}/>) ;
	// },

	render: function () {
    if (!this.state.board || !this.state.board.cards) {
      return (<p>Loading board...</p>);
    }

		// var cardSlots = [];
		// for ( var i = 0; i < this.state.board.cards.length; i++ ) {
		// 	cardSlots.push(this.renderCardSlot(i, this.state.board.id));
		// }

    return (
      <div id="board" className="group">
				<div className="board-bar group">
					<ul>
						<TitleButton subject={this.state.board.subject} boardId={this.state.board.id} />
					</ul>
				</div>
				<div className="board-content group">
					<CardSlotIndex cards={this.state.board.cards} number={this.state.board.cards.length} />
				</div>
      </div>
    );
  }

});

module.exports = BoardShow;
