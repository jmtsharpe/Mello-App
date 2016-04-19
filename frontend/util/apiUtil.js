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

	fetchUserBoards: function (userId) {
		$.ajax({
      url: "api/boards",
      method: "GET",
      dataType: "json",
			data: {userId: userId},
      success: function (boards) {
        BoardActions.receiveAllBoards(boards);
      },
      error: function () {
        return("fetchUserBoards#error");
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

	editBoardTitle: function (board) {
		$.ajax({
			url: "api/boards/" + board.id,
			method: "PATCH",
			data: {board: board},
			dataType: "json",
			success: function (board) {
				BoardActions.receiveSingleBoard(board);
			}
		});
	},

  fetchAllCards: function (boardId) {
    $.ajax({
      url: "api/boards/" + boardId + "/cards",
      method: "GET",
      dataType: "json",
			data: {boardId: boardId},
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

	editCard: function (card) {
    $.ajax({
      url: "api/boards/" + card.boardId + "/cards/" + card.id,
      method: "PATCH",
      data: {card: card},
      dataType: "json",
      success: function (cards) {
        CardActions.receiveAllCard(cards);
      }
    });
  },

	updateCardPosition: function (card, newPos) {
    $.ajax({
      url: "api/boards/" + card.boardId + "/cards/",
      method: "PATCH",
      data: {card: card, newPos: newPos},
      dataType: "json",
      success: function (cards) {
        CardActions.receiveAllCards(cards);
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

	editTask: function (newTask, task) {
    $.ajax({
      url: "api/boards/1/cards/" + task.card_id + "/tasks/" + task.id,
      method: "PATCH",
      data: {task: newTask},
      dataType: "json",
      success: function (task) {
        debugger
        TaskActions.receiveSingleTask(task);
        
      }
    });
  },

  signUp: function(credentials, callback) {
    $.ajax({
      type: "POST",
      url: "/api/users",
      dataType: "json",
      data: {user: credentials},
      success: function(currentUser) {
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

  logout: function(callback) {
    $.ajax({
      type: "DELETE",
      url: "/api/session",
      dataType: "json",
      success: function() {
        SessionActions.logout();
				callback && callback();
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
    });
  }


};
