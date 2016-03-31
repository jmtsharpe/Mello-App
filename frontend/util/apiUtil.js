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
  }
};
