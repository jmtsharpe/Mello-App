var React = require('react');
var TaskEditForm = require('./editForm');
var OnClickOutside = require('react-onclickoutside');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('./../../util/apiUtil');
var Modal = require('react-modal');
var App = require('./../app/app');
var TaskStore = require('./../../stores/task');

var TaskIndexItem = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
    },

	mixins: [OnClickOutside, LinkedStateMixin],

  getInitialState: function () {
    return { pressed: false, subject: this.props.task.subject };
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
    task.id = this.props.task.id;
    ApiUtil.editTask(task, this.props.task);
    this.setState({ pressed: false } );
  },

  _onChange: function () {
    this.setState({ subject: TaskStore.find(this.props.task.id) });
  },

  componentDidMount: function () {
    this.taskListener = TaskStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.taskListener.remove();
  },

  render: function () {

		if (!this.state.pressed) {
				return (
					<li className="task-list-padding">
						<div className="task-list-item" onClick={this.isPressed}>
							<p>{this.props.task.subject}</p>

						</div>
					</li>
				);
		}
    return(
      <li className="task-list-padding" >
        <div className="task-list-item" onClick={this.isPressed}>
          <p>{this.props.task.subject}</p>
        </div>
				<div className="overlay-back" onClick={this.isPressed}></div>
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
      </li>
    );
  }
});

module.exports = TaskIndexItem;

// <TaskEditForm task={this.props.task} defaultValue={this.props.task.subject} />
