var React = require('react');
var CardIndexItem = require('./indexItem');
var CardStore = require('../../stores/card');
var CardForm = require('./form');
var ApiUtil = require('../../util/apiUtil');

var CardIndex = React.createClass({

  getInitialState: function () {
    return {cards: CardStore.mine(this.props.boardId) };
  },

  _onChange: function () {
    this.setState({ cards: CardStore.mine(this.props.boardId) });
  },

  componentDidMount: function () {
    this.cardListener = CardStore.addListener(this._onChange);
    ApiUtil.fetchAllCards(this.props.boardId);
  },

  componentWillUnmount: function () {
    this.cardListener.remove();
  },

  render: function () {
    var cards = this.state.cards.map(function (card) {
      return <CardIndexItem boardId={this.props.boardId} cardId={card.id} key={card.id} card={card} />;
    }.bind(this));
    return (
      <div className="content">
        <div className="card-index group">
          <ul>
            {cards}
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = CardIndex;
