var React = require('react');


var BoardsDropdownItem = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
    },


  showDetail: function () {
      this.context.router.push('boards/' + this.props.board.id);
    },

  render: function () {
    return(
      <li onClick={this.showDetail} className="board-dropdown-item">
        <a className="board-dropdown-item-link">
					<div className="board-dropdown-item-link-wrapper">
						<div className="board-dropdown-item-thumbnail"></div>
						<span className="board-dropdown-item-title">
							{this.props.board.subject}
						</span>
					</div>
				</a>
      </li>
    );
  }
});

module.exports = BoardsDropdownItem;
