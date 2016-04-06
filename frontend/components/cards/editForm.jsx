var React = require('react');
var ApiUtil = require('../../util/apiUtil');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var EditCardForm = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
    },
  mixins: [LinkedStateMixin],

  blankAttrs: {
    subject: ''
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

	componentDidMount: function () {
		this.setState({subject: this.props.defaultValue});
	},




  editCard: function (event) {
    event.preventDefault();
    var card = {};
    Object.keys(this.state).forEach(function (key) {
      { card[key] = this.state[key]; }
    }.bind(this));
    card.id = this.props.cardId;
    ApiUtil.editCard(card);
    this.setState(this.blankAttrs);
  },


  render: function () {
    return(
      <div className="edit-card-form">
        <form className="edit-card" onSubmit={this.editCard}>
          <input
            className="edit-input-field"
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

module.exports = EditCardForm;
