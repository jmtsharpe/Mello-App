var React = require('react');
var BoardIndexItem = require('./indexItem');
var BoardStore = require('../../stores/board.js');
var BoardForm = require('./form');
var ApiUtil = require('../../util/apiUtil');

BoardIndex = React.createClass({

  getInitialState: function () {
    return {boards: BoardStore.all() };
  },

  _onChange: function () {
    this.setState({ boards: BoardStore.all() });
  },

  componentDidMount: function () {
    this.boardListener = BoardStore.addListener(this._onChange);
    ApiUtil.fetchAllBoards();
  },

  compomentWillUnmount: function () {
    this.boardListener.remove();
  },

  render: function () {

    var boards = this.state.boards.map(function (board) {
      debugger
      return <BoardIndexItem key={board.id} board={board} />;
    }.bind(this));
    debugger
    return (
      <div className="board-index">
        <h2>Create a board</h2>
        <BoardForm />
        <h2>My Boards</h2>
        <ul>
          {boards}
        </ul>

      </div>
    );
  }

});

module.exports = BoardIndex;
