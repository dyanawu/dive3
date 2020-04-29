const React = require('react');
const AuthContent = require('./authcontent');

class Home extends AuthContent {
  constructor (props) {
    super(props);
  }

  showContent() {
    return (
      <p>Welcome to my dive log!</p>
    );
  }
}

module.exports = Home;
