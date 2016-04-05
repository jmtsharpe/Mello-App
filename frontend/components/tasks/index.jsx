var React = require('react');
var TaskIndexItem = require('./indexItem');
var TaskStore = require('../../stores/task');
var TaskForm = require('./form');
var ApiUtil = require('../../util/apiUtil');

var TaskIndex = React.createClass({

  // getInitialState: function () {
  //   return {tasks: TaskStore.mine(this.props.cardId) };
  // },

  // _onChange: function () {
  //   this.setState({ tasks: TaskStore.mine(this.props.cardId) });
  // },
	//
  // componentDidMount: function () {
  //   this.taskListener = TaskStore.addListener(this._onChange);
  // },
	//
  // componentWillUnmount: function () {
  //   this.taskListener.remove();
  // },

  render: function () {
    var tasks = this.props.tasks.map(function (task) {
      return <TaskIndexItem key={task.id} task={task} />;
    }.bind(this));
    return (

        <div className="task-index group">
          <ul>
            {tasks}
          </ul>
        </div>

    );
  }
});

module.exports = TaskIndex;
