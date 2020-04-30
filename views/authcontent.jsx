const React = require('react');
const Nav = require('./nav');
const Template = require('./template');

class AuthContent extends Template {
  constructor (props) {
    super(props);
  }

  renderContent() {
    return (
      <div className="row flex-sm-grow-1">

        <div className="col-sm-2 pt-3 bg-secondary">
          <Nav />
        </div>

        <div className="col-sm-10 pt-3">
          {this.showContent()}
        </div>

      </div>
    );
  }
}

module.exports = AuthContent;
