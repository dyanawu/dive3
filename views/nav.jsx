const React = require('react');

class Nav extends React.Component {

  render() {
    return (
      <nav class="nav flex-column">
        <a class="nav-link btn btn-outline-info text-info mb-3" href="/trips">Trips</a>
        <a class="nav-link btn btn-outline-info text-info mb-3" href="/dives">Dives</a>
      </nav>
    );
  }
}

module.exports = Nav;
