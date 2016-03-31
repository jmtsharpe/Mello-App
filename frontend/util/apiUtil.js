var ApiActions = require('../actions/boardActions.js');

module.exports = {
  fetchAllBoards: function () {
    $.ajax({
      url: "api/boards",
      method: "GET",
      success: function (boards) {
        ApiActions.receiveAllBoards(boards);
      }
    });
  },

  fetchSingleBoard: function (id) {
    $.ajax({
      url: "api/boards/" + id,
      method: "GET",
      success: function (board) {
        ApiActions.receiveSingleBoard(board);
      }
    });
  },

  createBoard: function (board, callback) {
    $.ajax({
      url: "api/boards",
      method: "POST",
      data: {board: board},
      success: function (board) {
        ApiActions.receiveSingleBoard(board);
        callback && callback(board.id);
      }
    });
  },

  fetchAllCards: function () {
    $.ajax({
      url: "api/boards",
      method: "GET",
      success: function (boards) {
        ApiActions.receiveAllBoards(boards);
      }
    });
  },

  createCard: function (card, callback) {
    $.ajax({
      url: "api/boards/:id/cards",
      method: "POST",
      data: {card: card},
      success: function (card) {
        ApiActions.receiveSingleCard(card);
        callback && callback(card.id);
      }
    });
  }
};
