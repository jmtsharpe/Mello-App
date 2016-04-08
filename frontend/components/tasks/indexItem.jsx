var React = require('react');
var TaskEditForm = require('./editForm');
var OnClickOutside = require('react-onclickoutside');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../../util/apiUtil');
var Modal = require('react-modal');
var App = require('./../app/app');


var customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
		background: '#efefef',
		width: '300px',
		height: '220px',
		position: 'absolute',
  }
};

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
    this.setState({ pressed: false} );
  },

		// componentDidMount: function () {
		// 	this.setState({subject: this.props.defaultValue});
		// },

		// contextTypes: {
		// 		router: React.PropTypes.object.isRequired
		// 	},
		// mixins: [LinkedStateMixin],
		//
		// blankAttrs: {
		// 	subject: '',
		// },
		//
		// getInitialState: function () {
		// 	return this.blankAttrs;
		// },


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
