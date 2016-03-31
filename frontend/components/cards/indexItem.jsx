var React = require('react');


var CardIndexItem = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
    },

  render: function () {
    return(
      <li className="card-list-item">
        <p>{this.props.card.subject}</p>
      </li>
    );
  }
});

module.exports = CardIndexItem;
