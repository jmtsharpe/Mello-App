var React = require('react');


var BoardDropdownItem = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
    },


  showDetail: function () {
      this.context.router.push('boards/' + this.props.board.id);
    },

  render: function () {
    return(
      <li onClick={this.showDetail} className="board-dropdown-item">
        <p>{this.props.board.subject}</p>
      </li>
    );
  }
});

module.exports = BoardDownItem;
