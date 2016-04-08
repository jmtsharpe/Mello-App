var React = require('react');
var CardIndexItem = require('./indexItem');
var CardStore = require('../../stores/card');
var CardFormButton = require('./formButton');
var CardSlot = require('./cardSlot');
var ApiUtil = require('../../util/apiUtil');
var TaskStore = require('../../stores/task');
var DragSource = require('react-dnd').DragSource;
var DropTarget = require('react-dnd').DropTarget;
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');

var CardDndItem = require('./cardDndItem');

var CardIndex = React.createClass({

  getInitialState: function () {
    return { cards: CardStore.all() };
  },

  // _onChange: function () {
  //   this.setState({ cards: CardStore.all() });
  // },
	//
  // componentDidMount: function () {
  //   this.cardListener = CardStore.addListener(this._onChange);
	// 	this.taskListener = TaskStore.addListener(this._onChange);
	// 	ApiUtil.fetchAllCards(this.props.boardId);
  // },
	//
  // componentWillUnmount: function () {
  //   this.cardListener.remove();
  // },

	renderCardSlot: function (i) {
		return (
			<li key={i}>
				<CardDndItem card={this.props.cards[i]} position={i} />
			</li>
		);
	},

  render: function () {

		var cardSlots = [];

		for ( var i = 0; i < this.props.number; i++ ) {
			cardSlots.push(this.renderCardSlot(i));
		}

    // var cards = this.props.cards.map(function (card) {
		//
    //   return <li className="card-list-item-slot">
		// 						<div className="card-list-item">
		//
		// 							<CardIndexItem  key={card.id} boardId={this.props.boardId} card={card} />
		// 						</div>
		// 					</li>
		// 			;
    // }.bind(this));
    return (
      <div className="card-index group">
        <ul className="card-list">
					{cardSlots}
					<CardFormButton boardId={this.props.boardId} />
        </ul>
      </div>
    );
  }
});

module.exports = DragDropContext(HTML5Backend)(CardIndex);
