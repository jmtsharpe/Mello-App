var React = require('react');
var BoardStore = require('./../../stores/board');
var ApiUtil = require('./../../util/apiUtil');
var CardForm = require('./../cards/form');
var CardIndex = require('./../cards/index');


var BoardShow = React.createClass({

  getInitialState: function () {
    return {board: BoardStore.find(this.props.params.id) };
  },

  _onChange: function () {
    this.setState({
      board: BoardStore.find(this.props.params.id)
    });
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchSingleBoard(newProps.params.id);
  },

  componentDidMount: function () {

    this.boardListener = BoardStore.addListener(this._onChange);
    ApiUtil.fetchSingleBoard(this.props.params.id);
  },

  componentWillUnmount: function () {
    this.boardListener.remove();
  },

  addCard: function () {

  },

  render: function () {

    var board = function () {
      if (this.state.board === undefined) {
        return (<p>Loading board...</p>);
      } else {
        return (
          <div id="board" className="group">
            <p>{this.state.board.subject}</p>
            <CardIndex boardId={this.state.board.id} />
            <CardForm boardId={this.state.board.id} />
          </div>
        );
      }
    }.bind(this);
    return (
      <div>{board()}</div>
    );
  }

});

module.exports = BoardShow;
