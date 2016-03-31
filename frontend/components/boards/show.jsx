var React = require('react');
var BoardStore = require('../../stores/board');
var ApiUtil = require('../../util/apiUtil');
var Card = require('../cards/form');


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

  render: function () {

    var board = function () {
      if (this.state.board === undefined) {
        return (<p>Loading board...</p>);
      } else {
        return (<p>{this.state.board.subject}</p>);
      }
    }.bind(this);
    return (
      <div id="board" className="group">
        <h1>{board()}</h1>
        <div onClick={this.addCard}>Add a card</div>
      </div>
    );
  }

});

module.exports = BoardShow;
