var React = require('react');
var ApiUtil = require('../../util/apiUtil.js');
var OnClickOutside = require('react-onclickoutside');
var BoardStore = require('./../../stores/board');
var BoardsDropdownItem = require('./boardsDropdownItem');
var SessionStore = require('./../../stores/session');

var SearchDropdown = React.createClass({

	mixins: [OnClickOutside],

	contextTypes: {
      router: React.PropTypes.object.isRequired
    },

	getInitialState: function () {
    return { pressed: this.props.open, boards: this.props.boards };
  },

  isPressed: function () {
		this.setState({pressed: !this.state.pressed});
	},

  handleClickOutside: function (e) {
    this.setState({ pressed: false })
  },


  render: function () {

		if (typeof this.state.boards === undefined || this.state.boards.length === 0 ) {
      var boards = [<li>NO BOARDS FOUND</li>];
		} else {
			var boards = [];
			this.state.boards.forEach(function (board) {
				boards.push( <BoardsDropdownItem board={board} />
				)
			});
		}

    if (this.state.pressed) {
  		return (
  				<div className="search-dropdown" onClick={this.isPressed}>
  					<div className="search-dropdown-head">
  						<h3>Search</h3>
  					</div>
  					<div className="search-dropdown-index group">
  						<ul>
  							{boards}
  						</ul>
  					</div>
  				</div>
  		);
		}

    return (
      <div></div>
    )
  }
});

module.exports = SearchDropdown;
