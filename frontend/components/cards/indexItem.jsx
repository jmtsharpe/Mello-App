var React = require('react');
var TaskIndex = require('./../tasks/index');
var TaskForm = require('./../tasks/form');


var CardIndexItem = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
    },

  render: function () {
    return(
      <li className="card-list-item">
        <p>{this.props.card.subject}</p>
				<TaskIndex className="task-index" boardId={this.props.boardId} cardId={this.props.cardId} />
				<TaskForm boardId={this.props.boardId} cardId={this.props.cardId} />
      </li>
    );
  }
});

module.exports = CardIndexItem;
