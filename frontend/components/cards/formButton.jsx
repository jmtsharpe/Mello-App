var React = require('react');
var CardForm = require('./form');
var OnClickOutside = require('react-onclickoutside');

CardFormButton = React.createClass({
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
          <li className="card-list-item" id="card-creation" onClick={this.isPressed}>
    				<h2>Create a card</h2>
          </li>
  			);
  		}
      return(
        <li className="card-list-item" id="card-creation" onClick={this.isPressed}>
          <CardForm />
        </li>
      );

  }

});

module.exports = CardFormButton;
