var React = require('react');
var TaskIndex = require('./../tasks/index');
var TaskFormButton = require('./../tasks/formButton');
var TaskStore = require('./../../stores/task');
var CardStore = require('./../../stores/card');
var CardEditForm = require('./editForm');
var OnClickOutside = require('react-onclickoutside');
// var DragSource = require('react-dnd').DragSource;
// var ItemTypes = require('./../../constants/draggableConstants').ItemTypes;


var CardIndexItem = React.createClass({
	mixins: [OnClickOutside],
  contextTypes: {
      router: React.PropTypes.object.isRequired
    },

	getInitialState: function () {
		return ({ pressed: false });
	},

	isPressed: function () {
		debugger
		this.setState({pressed: !this.state.pressed });
	},

	notPressed: function () {
		this.setState({pressed: false});
	},

  handleClickOutside: function (e) {
    this.setState({ pressed: false });
  },



  render: function () {
		if (!this.state.pressed) {
	    return (
	      <li className="card-list-item">
	        <h2 onClick={this.isPressed} className="card-title">
						{this.props.card.subject}
					</h2>
					<TaskIndex className="task-index" tasks={this.props.card.tasks} cardId={this.props.cardId} />
					<TaskFormButton className="task-creation-div" boardId={this.props.board_id} cardId={this.props.card.id} />
	      </li>
	    );
		}
		return (
			<li className="card-list-item">
				<CardEditForm defaultValue={this.props.card.subject} cardId={this.props.card.id}/>
				<TaskIndex className="task-index" tasks={this.props.card.tasks} cardId={this.props.cardId} />
				<TaskFormButton className="task-creation-div" boardId={this.props.board_id} cardId={this.props.card.id} />
			</li>
		);
  }
});


module.exports = CardIndexItem;
