const React = require('react');

class Nav extends React.Component {

  render() {
    return (
      <nav className="nav flex-column">
        <a className="nav-link btn btn-outline-info mb-3" href="/trips">Trips</a>
        <a className="nav-link btn btn-outline-info  mb-3" href="/dives">Dives</a>
      </nav>
    );
  }
}

module.exports = Nav;
