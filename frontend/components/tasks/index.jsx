var React = require('react');
var TaskIndexItem = require('./indexItem');
var TaskStore = require('../../stores/task');
var TaskForm = require('./form');
var ApiUtil = require('../../util/apiUtil');

var DragSource = require('react-dnd').DragSource;
var DropTarget = require('react-dnd').DropTarget;
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');


var TaskIndex = React.createClass({

  getInitialState: function () {
    return ({ tasks: this.props.tasks })
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({ tasks: newProps.tasks })
  },

  render: function () {

    if (this.props.tasks.length === 0) {
      var tasks = ""
    } else {
      var tasks = this.state.tasks.map(function (task) {
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

module.exports = DragDropContext(HTML5Backend)(TaskIndex);

// module.exports = TaskIndex;
