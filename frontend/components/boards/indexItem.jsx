var React = require('react');
var History = require('react-router').History;

var BoardIndexItem = React.createClass({

  mixins: [History],

  showDetail: function () {
      this.history.pushState(null, 'boards/' + this.props.board.id, {});
    },

  render: function () {
    return(
      <li onClick={this.showDetail} className="board-list-item">
        <p>{this.props.board.subject}</p>
      </li>
    );
  }
});

module.exports = BoardIndexItem;
