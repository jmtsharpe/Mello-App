var React = require('react');
var CardStore = require('../../stores/card');
var CardFormButton = require('./formButton');
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

  _onChange: function () {
    this.setState({ cards: CardStore.all() });
  },

  componentDidMount: function () {
    this.cardListener = CardStore.addListener(this._onChange);
		this.taskListener = TaskStore.addListener(this._onChange);
		ApiUtil.fetchAllCards(this.props.boardId);
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({ cards: CardStore.all() });
  },

  componentWillUnmount: function () {
    this.cardListener.remove();
    this.taskListener.remove();
  },

	renderCardSlot: function (i) {
		return (
			<CardDndItem position={i} card={this.state.cards[i]} />
		);
	},

  render: function () {

    if ( typeof this.state.cards === undefined) {
      return (
        <div> LOADING CARDS... </div>
      );
    }

		var cardSlots = [];

		for ( var i = 0; i < this.state.cards.length; i++ ) {
			cardSlots.push(this.renderCardSlot(i));
		}

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
// module.exports = CardIndex;

module.exports = DragDropContext(HTML5Backend)(CardIndex);
