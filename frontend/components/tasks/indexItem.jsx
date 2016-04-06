var React = require('react');
var TaskEditForm = require('./editForm');
var OnClickOutside = require('react-onclickoutside');
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

	mixins: [OnClickOutside],

	  getInitialState: function () {
	    return { pressed: false };
	  },

	  isPressed: function () {
			this.setState({pressed: !this.state.pressed});
		},

	  handleClickOutside: function (e) {
	    this.setState({ pressed: false});
	  },

	// getInitialState: function() {
  //   return { modalIsOpen: false };
  // },
	//
  // openModal: function() {
  //   this.setState({modalIsOpen: true});
  // },
	//
  // closeModal: function() {
  //   this.setState({modalIsOpen: false});
  // },


  render: function () {
			// return(
			// 	<li className="task-list-padding">
	    //     <div className="task-list-item" onClick={this.openModal}>
	    //       <p>{this.props.task.subject}</p>
			// 			<Modal
		  //         isOpen={this.state.modalIsOpen}
		  //         onRequestClose={this.closeModal}
		  //         style={customStyles} >
			// 				<TaskEditForm task={this.props.task} />
			// 			</Modal>
	    //     </div>
	    //   </li>
			// );

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
				<TaskEditForm task={this.props.task} />
      </li>
    );
  }
});

module.exports = TaskIndexItem;
