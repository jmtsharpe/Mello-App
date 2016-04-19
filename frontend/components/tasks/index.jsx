var React = require('react');
var TaskIndexItem = require('./indexItem');
var TaskStore = require('../../stores/task');
var TaskForm = require('./form');
var ApiUtil = require('../../util/apiUtil');

var TaskIndex = React.createClass({

  render: function () {

    if (this.props.tasks.length === 0) {
      var tasks = ""
    } else {
      var tasks = this.props.tasks.map(function (task) {
        return <TaskIndexItem key={task.id} task={task} />;
      }.bind(this));
    }

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
