var BoardActions = require('../actions/boardActions.js');
var CardActions = require('../actions/cardActions.js');
var TaskActions = require('../actions/taskActions.js');

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
    debugger
    $.ajax({
      url: "api/boards/" + board_id + "/cards",
      method: "POST",
      data: {card: card},
      success: function (card) {
        debugger
        CardActions.receiveSingleCard(card);
      }
    });
  },

	fetchAllTasks: function (board_id, card_id) {

    $.ajax({
      url: "api/boards/" + board_id + "/cards/" + card_id + "/tasks",
      method: "GET",
      success: function (tasks) {
        TaskActions.receiveAllTasks(tasks);
      },
      error: function (tasks) {
        return("fetchAllTasks#error");
      }
    });
  },

  createTask: function (task, board_id, card_id) {
		debugger;
    $.ajax({
      url: "api/boards/" + board_id + "/cards/" + card_id + "/tasks",
      method: "POST",
      data: {task: task},
      success: function (task) {
        TaskActions.receiveSingleTask(task);
      }
    });
  }


};
