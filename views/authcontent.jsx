const React = require('react');
const Nav = require('./nav');
const Template = require('./template');

class AuthContent extends Template {
  constructor (props) {
    super(props);
  }

  renderContent() {
    return (
      <div className="row my-3 flex-sm-grow-1">

        <div className="col-sm-2">
          <Nav />
        </div>

        <div className="col-sm-10 border-left border-info">
          {this.showContent()}
        </div>

      </div>
    );
  }
}

module.exports = AuthContent;
