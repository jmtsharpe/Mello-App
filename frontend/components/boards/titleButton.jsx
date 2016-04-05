var React = require('react');
var TitleEdit = require('./titleEdit');
var OnClickOutside = require('react-onclickoutside');

TitleButton = React.createClass({
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




  render: function () {

		if (!this.state.pressed) {
			return(
        <li className="board-title" onClick={this.isPressed}>
  				<h4>{this.props.subject}</h4>
        </li>
			);
		}
    return(
			<li className="board-title" onClick={this.isPressed}>
				<h4>{this.props.subject}</h4>
				<TitleEdit className="title-edit-form" boardId={this.props.boardId} />
			</li>
    );

  }

});

module.exports = TitleButton;
