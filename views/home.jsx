const React = require('react');
const AuthContent = require('./authcontent');

class Home extends AuthContent {
  constructor (props) {
    super(props);
    this.title = "Dive dive dive! A Marine Visit Chronicler"
  }

  showContent() {
    return (
      <p>Welcome to my dive log!</p>
    );
  }
}

module.exports = Home;
