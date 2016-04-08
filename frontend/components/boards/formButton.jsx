var React = require('react');
var BoardForm = require('./form');
var OnClickOutside = require('react-onclickoutside');

BoardFormButton = React.createClass({
mixins: [OnClickOutside],
  getInitialState: function () {
    return { pressed: false };
  },

  isPressed: function () {
		this.setState({pressed: true});
	},

  handleClickOutside: function (e) {
    this.setState({ pressed: false});
  },




  render: function () {
		if (!this.state.pressed) {
			return(
				<li className="board-list-item-padding">
					<div id="create-board-button" className="board-list-item" onClick={this.isPressed}>

						Create a board
					</div>
				</li>
			);
		}
    return(
			<li className="board-list-item-padding">
				<div id="create-board-button" className="board-list-item" onClick={this.isPressed}>
					Create a board
          <BoardForm />
				</div>
      </li>
    );
  }

});

module.exports = BoardFormButton;
