var React = require('react');
var BoardIndexItem = require('./indexItem');
var BoardStore = require('../../stores/board.js');
var BoardForm = require('./form');
var ApiUtil = require('../../util/apiUtil');

var BoardIndex = React.createClass({

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

  componentWillUnmount: function () {
    this.boardListener.remove();
  },

  render: function () {

    var boards = this.state.boards.map(function (board) {
      return <BoardIndexItem key={board.id} board={board} />;
    }.bind(this));
    return (
      <div className="content">
        <div className="board-index group">


          <ul>
            {boards}
          </ul>

          <BoardForm />
        </div>
        {this.props.children}
      </div>
    );
  }

});

module.exports = BoardIndex;
