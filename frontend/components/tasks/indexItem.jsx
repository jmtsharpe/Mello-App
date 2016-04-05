var React = require('react');


var TaskIndexItem = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
    },

  render: function () {
    return(
      <li className="task-list-padding">
        <div className="task-list-item">
          <p>{this.props.task.subject}</p>
        </div>
      </li>
    );
  }
});

module.exports = TaskIndexItem;