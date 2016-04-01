var React = require('react');
var ApiUtil = require('../../util/apiUtil.js');

var LinkedStateMixin = require('react-addons-linked-state-mixin');

module.exports = React.createClass({
  mixins: [LinkedStateMixin],
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  blankAttrs: {
    subject: '',
    user_id: ''
  },

  getInitialState: function () {
    return { pressed: false };
  },

  createBoard: function (event) {
    event.preventDefault();
    var board = {};
    Object.keys(this.blankAttrs).forEach(function (key) {
			debugger;
      { board[key] = this.blankAttrs[key]; }
    }.bind(this));
    board.user_id = 1;
    ApiUtil.createBoard(board, function (id) {
      this.context.router.push("/boards/" + id);
    }.bind(this));
    this.setState(this.blankAttrs);
  },

	isPressed: function () {
		this.setState({pressed: true});
	},

  render: function () {
		if (!this.state.pressed) {
			return(
				<div className="create-board-button" onClick={this.isPressed}>
					<h2>Create a board</h2>
					something
				</div>
			);
		}
    return(

			<div className="create-board-button">
				<h2>Create a board</h2>
        <div className="board-creation-div">
          <div className="create-form">
            <form className='new-board' onSubmit={this.createBoard}>
              <label htmlFor='board_subject'>Subject:</label>
              <input
                type='text'
                id='board_subject'
                valueLink={this.linkState("subject")}
              />
              <button className="create-board-">Create Board</button>
            </form>
          </div>
        </div>
			</div>
    );
  }
});
