var React = require('react');
var TaskIndex = require('./../tasks/index');
var TaskFormButton = require('./../tasks/formButton');
var TaskStore = require('./../../stores/task');
var CardStore = require('./../../stores/card');
var CardEditForm = require('./editForm');
var OnClickOutside = require('react-onclickoutside');
var ApiUtil = require('../../util/apiUtil');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var PropTypes = React.PropTypes;
var DragSource = require('react-dnd').DragSource;
var ItemTypes = require('./../../constants/draggableConstants');

var CardSource = {
  beginDrag: function (props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}


var CardIndexItem = React.createClass({
	mixins: [OnClickOutside, LinkedStateMixin],

	propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  contextTypes: {
      router: React.PropTypes.object.isRequired
    },

	getInitialState: function () {
		return ({ pressed: false, subject: this.props.card.subject });
	},

	isPressed: function () {
		this.setState({pressed: !this.state.pressed });
	},

	notPressed: function () {
		this.setState({pressed: false});
	},

	componentDidMount: function () {
		this.setState({ subject: this.props.card.subject });
	},

  handleClickOutside: function (e) {
    this.setState({ pressed: false });
  },

	editCard: function (event) {
    event.preventDefault();
    var card = {};
    Object.keys(this.state).forEach(function (key) {
      { card.subject = this.state.subject; }
    }.bind(this));
    card.id = this.props.card.id;
		card.boardId = this.props.card.board_id;
    ApiUtil.editCard(card);
    this.setState({ pressed: false });
  },



  render: function () {

		var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

		if (!this.state.pressed) {
	    return connectDragSource (

					<div style={{
		        opacity: isDragging ? 0.5 : 1,
		        cursor: 'move'
		      }} className="draggable">
							<div className="card-list-item">
			        <h2 onClick={this.isPressed} className="card-title">
								{this.props.card.subject}
							</h2>
							<TaskIndex className="task-index" tasks={this.props.card.tasks} cardId={this.props.cardId} />
							<TaskFormButton className="task-creation-div" boardId={this.props.board_id} cardId={this.props.card.id} />
							</div>
					</div>
	    );
		}
		return connectDragSource (
			<li className="card-list-item">
				<div className="edit-card-form">
	        <form className="edit-card" onSubmit={this.editCard}>
	          <input
	            className="edit-input-field"
	            type="text"
	            id="card_subject"
							defaultValue="Add a card..."
	            valueLink={this.linkState("subject")}
	          />
	          <br/>
	          <button className="submit">Save</button>
	        </form>
	      </div>
				<TaskIndex className="task-index" tasks={this.props.card.tasks} cardId={this.props.cardId} />
				<TaskFormButton className="task-creation-div" boardId={this.props.board_id} cardId={this.props.card.id} />
			</li>
		);
  }
});

// <CardEditForm defaultValue={this.props.card.subject} cardId={this.props.card.id}/>

module.exports = DragSource(ItemTypes.CARD, CardSource, collect)(CardIndexItem);

// module.exports = CardIndexItem;
