var BoardActions = require('../actions/boardActions.js');
var CardActions = require('../actions/cardActions.js');

module.exports = {
  fetchAllBoards: function () {
    $.ajax({
      url: "api/boards",
      method: "GET",
      success: function (boards) {
        BoardActions.receiveAllBoards(boards);
      },
      error: function () {
        return("fetchAllBoards#error");
      }
    });
  },

  fetchSingleBoard: function (id) {
    $.ajax({
      url: "api/boards/" + id,
      method: "GET",
      success: function (board) {
        BoardActions.receiveSingleBoard(board);
      },
      error: function () {
        return("fetchSingleBoards#error");
      }
    });
  },

  createBoard: function (board, callback) {

    $.ajax({
      url: "api/boards",
      method: "POST",
      data: {board: board},
      success: function (board) {
        BoardActions.receiveSingleBoard(board);
        callback && callback(board.id);
      }
    });
  },

  fetchAllCards: function (board_id) {
    $.ajax({
      url: "api/boards/" + board_id + "/cards",
      method: "GET",
      success: function (cards) {
        CardActions.receiveAllCards(cards);
      },
      error: function () {
        return("fetchAllCards#error");
      }
    });
  },

  createCard: function (card, board_id) {
    debugger;
    $.ajax({
      url: "api/boards/" + board_id + "/cards",
      method: "POST",
      data: {card: card},
      success: function (card) {
        CardActions.receiveSingleCard(card);
        callback && callback(card.id);
      }
    });
  }
};
