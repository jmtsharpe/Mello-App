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
        <h2 className="card-title">{this.props.card.subject}</h2>
				<TaskIndex className="task-index" tasks={this.props.card.tasks} cardId={this.props.cardId} />
				<TaskForm className="task-creation-div" boardId={this.props.card.board_id} cardId={this.props.card.id} />
      </li>
    );
  }
});

module.exports = CardIndexItem;
