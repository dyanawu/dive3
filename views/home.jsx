const React = require('react');
const AuthContent = require('./authcontent');

class Home extends AuthContent {
  constructor (props) {
    super(props);
    this.title = "Dive dive dive! A Marine Visit Chronicler"
  }

  showContent() {
    return (
      <div className="row">
        <div className="col text-center">
          <p className="h4">Welcome to my dive log!</p>
        </div>
      </div>
    );
  }
}

module.exports = Home;
