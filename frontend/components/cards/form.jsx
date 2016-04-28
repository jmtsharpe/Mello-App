var React = require('react');
var ApiUtil = require('../../util/apiUtil');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var CardStore = require('./../../stores/card');

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
      { card[key] = this.state[key]; }
    }.bind(this));
		card.position = CardStore.all().length;
    card.board_id = this.props.boardId;
    ApiUtil.createCard(card, this.props.boardId);
    this.setState(this.blankAttrs);
  },


  render: function () {
    return(
      <div className="create-card-form">
        <form className="new-card" onSubmit={this.createCard}>
          <input
            className="card-input-field"
            type="text"
            id="card_subject"
						defaultValue="Add a card..."
            valueLink={this.linkState("subject")}
          />
          <br/>
          <button className="submit">Save</button>
        </form>
      </div>
    );
  }
});

module.exports = CardForm;
