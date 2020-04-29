const React = require('react');

class Head extends React.Component {

  render() {
    let login =
      <a href="/login"
         className="btn btn-light text-info">
        Log In <i className="fas fa-sign-in-alt"></i>
      </a>;

    let logout =
      <a href="/login"
         className="btn btn-light text-info">
        Log Out <i className="fas fa-sign-out-alt"></i>
      </a>;

    let placeholder = "";

    return (
      <React.Fragment>

        <a href="/" className="btn btn-lg my-auto ml-2 text-white">
          <span className="h2">
            Dive&nbsp;
            <i className="fas fa-fish"></i>&nbsp;
            <i className="fas fa-water"></i>
          </span>
        </a>
        <span className="my-auto pr-4">
          {placeholder}
        </span>

      </React.Fragment>
    );
  }
}

module.exports = Head;
