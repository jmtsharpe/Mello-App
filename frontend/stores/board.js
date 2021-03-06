var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var BoardConstants = require('../constants/boardConstants.js');
var BoardStore = new Store(AppDispatcher);

var _boards = {};

var _board = {};

var resetBoards = function (boards) {
  _boards = {};
  boards.forEach(function (board) {
    _boards[board.id] = board;
  });
};

var resetBoard = function (board) {
  _boards[board.id] = board;
};

BoardStore.all = function () {
  var boards = [];
  for (var id in _boards) {
    if (_boards.hasOwnProperty(id)) {
      boards.push(_boards[id]);
    }
  }

  boards = Object.keys(_boards).map(function (board_id) {
    return _boards[board_id];
  });
  return boards;
};

BoardStore.find = function (id) {
  return _boards[id];
};

BoardStore.findBySubject = function (title) {
  debugger
  var boards = [];
  for (var id in _boards) {
    if (_boards.hasOwnProperty(id)) {
      if (_boards[id].subject.includes(title)) {
        boards.push(_boards[id])
      }
    }
  }

  return boards
};

BoardStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case BoardConstants.BOARDS_RECEIVED:
      resetBoards(payload.boards);
      BoardStore.__emitChange();
      break;
    case BoardConstants.BOARD_RECEIVED:
      resetBoard(payload.board);
      BoardStore.__emitChange();
      break;
  }
};

module.exports = BoardStore;
