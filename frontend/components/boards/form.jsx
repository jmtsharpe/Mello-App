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
    return this.blankAttrs ;
  },



  createBoard: function (event) {
    event.preventDefault();
    var board = {};
    Object.keys(this.state).forEach(function (key) {
      { board[key] = this.state[key]; }
    }.bind(this));
    board.user_id = 1;
    ApiUtil.createBoard(board, function (id) {
      this.context.router.push("/boards/" + id);
    }.bind(this));
    this.setState(this.blankAttrs);
  },



  render: function () {

    return(
      <div className="board-creation-div">
        <div className="create-form">
          <h4>Create Board</h4>
          <form className='new-board' onSubmit={this.createBoard}>
            <label htmlFor='board_subject'>Title</label>
            <br/>
            <input
              type='text'
              id='board_subject'
              valueLink={this.linkState("subject")}
            />
          <button className="submit">Create Board</button>
          </form>
        </div>
      </div>
    );
  }
});
