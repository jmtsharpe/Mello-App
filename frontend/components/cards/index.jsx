var React = require('react');
var CardIndexItem = require('./indexItem');
var CardStore = require('../../stores/card');
var CardFormButton = require('./formButton');
var ApiUtil = require('../../util/apiUtil');
var TaskStore = require('../../stores/task');


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

  render: function () {
    var cards = this.props.cards.map(function (card) {

      return <li className="card-list-item-slot" key={card.id}>
								<div className="card-list-item">

									<CardIndexItem  key={card.id} boardId={this.props.boardId} card={card} />
								</div>
							</li>
					;
    }.bind(this));
    return (
      <div className="card-index group">
        <ul className="card-list">
          {cards}
					<CardFormButton boardId={this.props.boardId} />
        </ul>
      </div>
    );
  }
});

module.exports = CardIndex;
