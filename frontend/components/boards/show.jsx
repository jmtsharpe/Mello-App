var React = require('react');
var BoardStore = require('../../stores/board.js');

BoardIndexItem = React.createClass({
  render: function () {

    return(
      <li className="board-list-item">
        <p>{this.props.board.subject}</p>
      </li>
    );

  }
});

module.exports = BoardIndexItem;
