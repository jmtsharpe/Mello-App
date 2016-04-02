var React = require('react');
var ApiUtil = require('../../util/apiUtil');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var CardForm = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
    },
  mixins: [LinkedStateMixin],

  blankAttrs: {
    subject: '',
    board_id: ''
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  createCard: function (event) {
    event.preventDefault();
    var card = {};
    Object.keys(this.state).forEach(function (key) {
      debugger;
      { card[key] = this.blankAttrs[key]; }
    }.bind(this));
    card.board_id = this.props.boardId;
    ApiUtil.createCard(card, this.props.boardId);
    this.setState(this.blankAttrs);
  },


  render: function () {
    return(
      <div className="create-form">
        <h2>Create a card</h2>
        <form className='new-card' onSubmit={this.createCard}>
          <input
            type='text'
            id='card_subject'
            valueLink={this.linkState("subject")}
          />
        <button className="create-card">Save</button>
        </form>
      </div>
    );
  }
});

module.exports = CardForm;
