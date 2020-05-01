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

        <div className="unborderthis col-sm-3 col-md-2 pt-3 border-right border-info">
          <Nav />
        </div>


        <div className="col-sm-9 col-md-10 pt-3">
          {this.showContent()}
        </div>

      </div>
    );
  }
}

module.exports = AuthContent;
