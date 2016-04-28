var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var CardConstants = require('../constants/cardConstants.js');
var CardStore = new Store(AppDispatcher);


module.exports = CardStore;

var _cards = {};

var resetCards = function (cards) {
  _cards = {};
  cards.forEach(function (card) {
    _cards[card.position] = card;
  });
};

var resetCard = function (card) {
  _cards[card.position] = card;
};

CardStore.all = function () {
  _cards
  var cards = [];
  for (var id in _cards) {
    if (_cards.hasOwnProperty(id)) {
      cards.push(_cards[id]);
    }
  }


  function compare(a,b) {
    if (a.position < b.position)
      return -1;
    else if (a.position > b.position)
      return 1;
    else
      return 0;
  }

  cards = Object.keys(_cards).map(function (card_id) {
    return _cards[card_id];
  });
  return cards.sort(compare);
};

CardStore.reorder = function (origin, newPos) {
  console.log("Card store reorder");
  if (origin.position != newPos) {

    var newCards = this.all().map(function (card) {
      if ((card.position > newPos) && (card.position < origin.position)) {
        card.position += 1;
        return card;
      } else if ((card.position === newPos) && (card.position < origin.position)) {
        card.position += 1;
        return card;
      } else if ((card.position === newPos) && (card.position > origin.position)) {
        card.position -= 1;
        return card;
      } else if ((card.position < newPos) && (card.position > origin.position)) {
        card.position -= 1;
        return card;
      } else if (card.position === origin.position) {
        card.position = newPos;
        return card;
      } else {
        return card;
      }
    });
  }

  return newCards;

};

CardStore.find = function (id) {
  return _cards[id];
};

CardStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case CardConstants.CARDS_RECEIVED:
      resetCards(payload.cards);
      CardStore.__emitChange();
      break;
    case CardConstants.CARD_RECEIVED:
      resetCard(payload.card);
      CardStore.__emitChange();
      break;
  }
};

module.exports = CardStore;
