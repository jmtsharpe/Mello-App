var React = require('react');
var History = require('react-router').History;

var App = React.createClass({
    mixins: [History],

  goHome: function () {
      this.history.pushState(null, '', {});
    },

  goToBoards: function () {
    this.history.pushState(null, 'boards', {});
  },

  render: function () {
    return (
      <div>
        <header className="over-head group">
          <nav className="nav-bar">
            <ul className="over-head-left">
              <li className="board-options top-buttons"
                  onClick={this.goToBoards}>
                  Boards
              </li>
              <li>Search</li>
            </ul>
            <ul className="over-head-right top-buttons">


            </ul>
            <div className="over-head-logo" onClick={this.goHome}>
              Mello
            </div>
          </nav>
        </header>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
