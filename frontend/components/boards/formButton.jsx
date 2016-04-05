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
				<div className="create-board-button" onClick={this.isPressed}>
					<h2>Create a board</h2>
				</div>
			);
		}
    return(
        <div className="create-board-button" onClick={this.isPressed}>
          <h2>Create a board</h2>
          <BoardForm />
        </div>
    );
  }

});

module.exports = BoardFormButton;
