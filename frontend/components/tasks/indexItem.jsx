var React = require('react');
var TaskEditForm = require('./editForm');
var OnClickOutside = require('react-onclickoutside');
var App = require('./../app/app');


var TaskIndexItem = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
    },

	mixins: [OnClickOutside],

  getInitialState: function () {
    return { pressed: false };
  },

  isPressed: function () {
		debugger
		this.setState({pressed: !this.state.pressed});
		debugger
	},

  handleClickOutside: function (e) {
    this.setState({ pressed: false});
  },

  render: function () {
		debugger
		if (!this.state.pressed) {
			return(
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
				<TaskEditForm task={this.props.task} />
      </li>
    );
  }
});

module.exports = TaskIndexItem;
