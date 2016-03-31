var Dispatcher = require('../dispatcher/dispatcher.js');
var CardConstants = require('../constants/cardConstants.js');

module.exports = {
  receiveAllCards: function (cards) {
    Dispatcher.dispatch({
      actionType: CardConstants.CARDS_RECEIVED,
      cards: cards
    });
  },

  receiveSingleCard: function (card) {
    Dispatcher.dispatch({
      actionType: CardConstants.CARD_RECEIVED,
      card: card
    });
  }
};
