var React = require('react');
var TaskEditForm = require('./editForm');
var OnClickOutside = require('react-onclickoutside');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('./../../util/apiUtil');
var Modal = require('react-modal');
var App = require('./../app/app');
var TaskStore = require('./../../stores/task');
CardStore = require('./../../stores/card');

// var flow = require('lodash.flow');
// var DropTarget = require('react-dnd').DropTarget;
// var PropTypes = React.PropTypes;
// var DragSource = require('react-dnd').DragSource;


// var TaskSource = {
// 	beginDrag: function (props) {
//     return {
//       position: props.task.id,
// 			id: props.task.id,
//       subject: props.task.subject,
// 			cardId: props.task.card_id
//     };
//   }
// };
//
// var TaskTarget = {
// 	hover: function (props, monitor, component) {
//
// 	},
//
//   drop: function (props, monitor, component) {
// 		var newPos = component.props.task.id;
//     // ApiUtil.updateTaskPosition(monitor.getItem(), newPos);
//     return {};
//   },
//
// };
//
// function collect(connect, monitor) {
//   return {
//     connectDragSource: connect.dragSource(),
//     isDragging: monitor.isDragging()
//   };
// }
//
// function collectTarget(connect, monitor) {
//   return {
//     connectDropTarget: connect.dropTarget()
//   };
// }

var TaskIndexItem = React.createClass({
	mixins: [OnClickOutside, LinkedStateMixin],

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	// propTypes: {
	// 	connectDragSource: React.PropTypes.func.isRequired,
	// 	isDragging: React.PropTypes.bool.isRequired
	// },

  getInitialState: function () {
    return {
			pressed: false,
			subject: this.props.task.subject,
			task: this.props.task
		};
  },

  isPressed: function () {
		this.setState({pressed: !this.state.pressed});
	},

  handleClickOutside: function (e) {
    this.setState({ pressed: false});
  },

	editTask: function (event) {

    event.preventDefault();
    var task = {};
    Object.keys(this.state).forEach(function (key) {
      { task[key] = this.state[key]; }
    }.bind(this));
    task.id = this.state.task.id;
    ApiUtil.editTask(task, this.props.task);
    this.setState({ pressed: false } );
  },

  render: function () {

		// var connectDragSource = this.props.connectDragSource;
    // var isDragging = this.props.isDragging;
    // var connectDropTarget = this.props.connectDropTarget;

		if (!this.state.pressed) {
			// connectDragSource(connectDropTarget
			return (
				<div className="task-list-padding">
					<div className="task-list-item" onClick={this.isPressed}>
						<p>{this.state.subject}</p>
					</div>
				</div>
			);
		}
		// connectDragSource(connectDropTarget
    return (
      <div className="task-list-padding" >
        <div className="task-list-item" onClick={this.isPressed}>
          <p>{this.props.task.subject}</p>
        </div>
				<div className="overlay-back" onClick={this.isPressed} />
				<div className="edit-task">
	        <form className="task-edit-form" onSubmit={this.editTask}>
						<h3 className="edit-task-head">Edit Task</h3>
	          <textarea
	            className="task-form-field"
	            type='text'
	            id='task_subject'
	            valueLink={this.linkState("subject")}
	          />
	          <br />
	  				<button className="submit">Save</button>
	        </form>
	      </div>
      </div>
    );
  }
});

// module.exports = flow(
//   DragSource("indexItem", TaskSource, collect),
//   DropTarget("indexItem", TaskTarget, collectTarget)
// )(TaskIndexItem);

module.exports = TaskIndexItem;
