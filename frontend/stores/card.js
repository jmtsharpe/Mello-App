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
  _cards[card.id] = card;
};

CardStore.all = function () {
  var cards = [];
  for (var position in _cards) {
    if (_cards.hasOwnProperty(position)) {
      cards.push(_cards[position]);
    }
  }

  cards = Object.keys(_cards).map(function (card_id) {
    return _cards[card_id];
  });
  return cards;
};

// CardStore.mine = function (boardId) {
// 	var myCards = CardStore.all().filter( function (card) {
// 		return card.board_id === boardId;
// 	});
// 	return myCards;
// };
//
// CardStore.findMine = function () {
//   var cards = [];
//   for (var id in _cards) {
//     if (_cards.hasOwnProperty(id)) {
//       cards.push(_cards[id]);
//     }
//   }
// };

CardStore.findByPos = function (pos) {

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
