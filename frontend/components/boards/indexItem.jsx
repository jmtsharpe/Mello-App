var React = require('react');


var BoardIndexItem = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
    },


  showDetail: function () {
      this.context.router.push('boards/' + this.props.board.id);
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
