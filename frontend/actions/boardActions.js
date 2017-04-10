var Dispatcher = require('../dispatcher/dispatcher.js');
var BoardConstants = require('../constants/boardConstants.js');

module.exports = {
	receiveAllBoards: function (boards) {
		Dispatcher.dispatch({
			actionType: BoardConstants.BOARDS_RECEIVED,
			boards: boards
		});
	},

	receiveSingleBoard: function (board) {
		Dispatcher.dispatch({
			actionType: BoardConstants.BOARD_RECEIVED,
			board: board
		});
	}
};
