var React = require('react');
var TaskIndex = require('./../tasks/index');
var TaskFormButton = require('./../tasks/formButton');
var TaskStore = require('./../../stores/task');
var CardStore = require('./../../stores/card');
var CardEditForm = require('./editForm');
var OnClickOutside = require('react-onclickoutside');
var ApiUtil = require('../../util/apiUtil');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var flow = require('lodash.flow');
var DropTarget = require('react-dnd').DropTarget;
var PropTypes = React.PropTypes;
var DragSource = require('react-dnd').DragSource;
var ItemTypes = require('./../../constants/draggableConstants');

var CardSource = {
	beginDrag: function (props) {

    return {
      position: props.card.position,
			id: props.card.id,
      subject: props.card.subject,
			boardId: props.card.board_id
    };
  }
};

var CardTarget = {
	hover: function (props, monitor, component) {

	},

  drop: function (props, monitor, component) {
		var newPos = component.props.card.position;
    ApiUtil.updateCardPosition(monitor.getItem(), newPos);
    return {};
  },

};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

function collectTarget(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

var CardIndexItem = React.createClass({
	mixins: [OnClickOutside, LinkedStateMixin],

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	propTypes: {
	 connectDragSource: React.PropTypes.func.isRequired,
	 isDragging: React.PropTypes.bool.isRequired
 },


	getInitialState: function () {
		return ({
			pressed: false,
			card: this.props.card,
			subject: this.props.card.subject
		});
	},

	isPressed: function () {
		this.setState({pressed: true });
	},

	notPressed: function () {
		this.setState({pressed: false});
	},

	_onChange: function () {
		this.setState({ card: CardStore.find(this.props.position) });
	},

	componentDidMount: function () {
		this.cardListener = CardStore.addListener(this._onChange);
	},

	componentWillUnmount: function () {
		this.cardListener.remove();
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
    var connectDropTarget = this.props.connectDropTarget;




		if (!this.state.pressed) {
	    return connectDragSource(connectDropTarget(

					<li style={{
		        opacity: isDragging ? 0.5 : 1,
		        cursor: 'move'
		      }} className="card-list-item-slot">
							<div className="card-list-item" >
			        <h2 onClick={this.isPressed} className="card-title">
								{this.props.card.subject}
							</h2>
							<TaskIndex
								className="task-index"
								tasks={this.state.card.tasks}
								cardId={this.state.card.id}
							/>
							<TaskFormButton
								className="task-creation-div"
								boardId={this.state.card.board_id}
								cardId={this.state.card.id}
							/>
							</div>
					</li>
	    ));
		}

		debugger

		return connectDragSource(connectDropTarget(
			<li className="card-list-item-slot">
				<div className="card-list-item">
					<div className="edit-card-form">
		        <form
							className="edit-card"
							onSubmit={this.editCard}
						>
		          <input
		            className="edit-input-field"
		            type="text"
		            id="card_subject"
								defaultValue={this.state.subject}
		            valueLink={this.linkState("subject")}
		          />
		          <br/>
		          <button className="submit">Save</button>
		        </form>
		      </div>
					<TaskIndex
						className="task-index"
						tasks={this.state.card.tasks}
						cardId={this.state.cardId}
					/>
					<TaskFormButton
						className="task-creation-div"
						boardId={this.state.card.board_id}
						cardId={this.state.card.id}
					/>
				</div>
			</li>
		));
  }
});

module.exports = flow(
  DragSource("cardDndItem", CardSource, collect),
  DropTarget("cardDndItem", CardTarget, collectTarget)
)(CardIndexItem);
