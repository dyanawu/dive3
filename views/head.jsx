const React = require('react');

class Head extends React.Component {

  render() {
    let login =
      <a href="/login"
         className="btn btn-light text-info">
        Log In <i class="fas fa-sign-in-alt"></i>
      </a>;

    let logout =
      <a href="/login"
         className="btn btn-light text-info">
        Log Out <i class="fas fa-sign-out-alt"></i>
      </a>;

    return (
      <React.Fragment>

        <span className="h3 my-3 pl-4">Dive&nbsp;
          <i class="fas fa-fish"></i>&nbsp;
          <i class="fas fa-water"></i>
        </span>
        <span className="my-auto pr-4">
          {login}
        </span>

      </React.Fragment>
    );
  }
}

module.exports = Head;
