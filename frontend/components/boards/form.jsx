var React = require('react');
var ApiUtil = require('../../util/apiUtil.js');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');

module.exports = React.createClass({
  mixins: [LinkedStateMixin, History],

  blankAttrs: {
    subject: '',
    user_id: ''
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  createBoard: function (event) {
    event.preventDefault();
    var board = {};
    Object.keys(this.state).forEach(function (key) {
      { board[key] = this.state[key]; }
    }.bind(this));
    board.user_id = 1;
    ApiUtil.createBoard(board, function (id) {
      this.history.pushState(null, "/board/" + id, {});
    }.bind(this));
    this.setState(this.blankAttrs);
  },

  render: function () {
    return(
      <form className='new-board' onSubmit={this.createBoard}>

        <div>
          <label htmlFor='board_subject'>Subject:</label>
          <input
            type='text'
            id='board_subject'
            valueLink={this.linkState("subject")}
          />
        </div>


        <button>Create Board</button>
        <br />
      </form>
    );
  }
});
