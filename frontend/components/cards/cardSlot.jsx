// var React = require('react');
// var CardIndexItem = require('./indexItem');
// var CardStore = require('../../stores/card');
// var CardFormButton = require('./formButton');
// var ApiUtil = require('../../util/apiUtil');
// var TaskStore = require('../../stores/task');
//
// var CardDndItem = require('./cardDndItem');
// var DragSource = require('react-dnd').DragSource;
// var PropTypes = React.PropTypes;
// var DropTarget = require('react-dnd').DropTarget;
// var ItemTypes = require('./../../constants/draggableConstants');
//
// var slotTarget = {
// 	drop: function (props, monitor) {
// 		moveKnight(props.x, props.y);
// 	}
// };
//
// // function collect(connect, monitor) {
// //   return {
// //     connectDropTarget: connect.dropTarget(),
// //     isOver: monitor.isOver()
// //   };
// // }
//
// function collect(connect, monitor) {
//   return {
//     connectDropTarget: connect.dropTarget(),
//     isOver: monitor.isOver(),
//     canDrop: monitor.canDrop()
//   };
// }
//
// var CardSlot = React.createClass({
//
// 	// getInitialState: function () {
// 	// 	return({ card: CardStore.find()[this.props.position] });
// 	// },
//
// 	// propTypes: {
//   //   CardPosition: PropTypes.number.isRequired
//   // },
//
//
// 	// componentDidMount: function () {
// 	// 	piUtil.fetchAllCards(this.props.boardId);
// 	// },
//
//
//
//
// 	render: function () {
// 		return (
// 			<li className="card-list-item-slot">
// 				<CardDndItem card={this.props.card} boardId={this.props.boardId} position={this.props.position}/>
// 			</li>
// 		);
// 	}
//
// });
//
// module.exports = DropTarget(ItemTypes.CARD, slotTarget, collect)(CardSlot);
