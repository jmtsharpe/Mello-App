var React = require('react');
var TaskIndex = require('./../tasks/index');
var TaskFormButton = require('./../tasks/formButton');
var TaskStore = require('./../../stores/task');
var CardStore = require('./../../stores/card');


var CardIndexItem = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
    },



  render: function () {
    return(
      <li className="card-list-item">
        <h2 className="card-title">{this.props.card.subject}</h2>
				<TaskIndex className="task-index" tasks={this.props.card.tasks} cardId={this.props.cardId} />
				<TaskFormButton className="task-creation-div" boardId={this.props.board_id} cardId={this.props.card.id} />
      </li>
    );
  }
});

module.exports = CardIndexItem;
