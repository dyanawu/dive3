const React = require('react');
const AuthContent = require('./authcontent');

class Content extends AuthContent {
  constructor (props) {
    super(props);
  }

  showContent() {
    return (
      <h1>BANANANANANA</h1>
    );
  }
}

module.exports = Content;
