var BoardActions = require('../actions/boardActions.js');
var CardActions = require('../actions/cardActions.js');
var TaskActions = require('../actions/taskActions.js');
var SessionActions = require('../actions/sessionActions');

module.exports = {
  fetchAllBoards: function () {
    $.ajax({
      url: "api/boards",
      method: "GET",
      dataType: "json",
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
      dataType: "json",
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
      dataType: "json",
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
      dataType: "json",
      success: function (cards) {
        CardActions.receiveAllCards(cards);
      },
      error: function () {
        return("fetchAllCards#error");
      }
    });
  },

  createCard: function (card, board_id) {
    $.ajax({
      url: "api/boards/" + board_id + "/cards",
      method: "POST",
      data: {card: card},
      dataType: "json",
      success: function (card) {
        CardActions.receiveSingleCard(card);
      }
    });
  },

	fetchAllTasks: function (board_id, card_id) {

    $.ajax({
      url: "api/boards/" + board_id + "/cards/" + card_id + "/tasks",
      method: "GET",
      dataType: "json",
      success: function (tasks) {
        TaskActions.receiveAllTasks(tasks);
      },
      error: function (tasks) {
        return("fetchAllTasks#error");
      }
    });
  },

  createTask: function (task, board_id, card_id) {
    $.ajax({
      url: "api/boards/" + board_id + "/cards/" + card_id + "/tasks",
      method: "POST",
      data: {task: task},
      dataType: "json",
      success: function (task) {
        TaskActions.receiveSingleTask(task);
      }
    });
  },

  signUp: function(credentials, callback) {
    debugger
    $.ajax({
      type: "POST",
      url: "/users",
      dataType: "json",
      data: {user: credentials},
      success: function(currentUser) {
        debugger
        SessionActions.currentUserReceived(currentUser);
        callback && callback();
      }
    });
  },

  login: function(credentials, callback) {
    $.ajax({
      type: "POST",
      url: "/api/session",
      dataType: "json",
      data: credentials,
      success: function(currentUser) {
        SessionActions.currentUserReceived(currentUser);
        callback && callback();
      }
    });
  },

  logout: function() {
    $.ajax({
      type: "DELETE",
      url: "/api/session",
      dataType: "json",
      success: function() {
        SessionActions.logout();
      }
    });
  },

  fetchCurrentUser: function(completion) {
    $.ajax({
      type: "GET",
      url: "/api/session",
      dataType: "json",
      success: function(currentUser) {
        SessionActions.currentUserReceived(currentUser);
      },
      complete: function() {
        completion && completion();
      }
    })
  }


};
