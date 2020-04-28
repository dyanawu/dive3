const React = require('react');
const Template = require('./template');

class Login extends Template {
  constructor (props) {
    super(props);
  }

  renderContent() {
    return (
      <div className="row my-3 flex-grow-1">

        <div className="col">
          <h2>NOT LOGGED IN</h2>
        </div>

      </div>
    );
  }
}

module.exports = Login;
