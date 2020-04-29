const React = require('react');

class Foot extends React.Component {

  render() {
    return (
      <footer className="footer mt-auto bg-info text-right" style={{position: 'fixed', bottom: '0', width: '100%'}}>
        <p className="h6 pr-4 py-3 my-auto text-white">
          marine visit chronicler&nbsp;
          <a className="badge badge-light text-info" href="https://github.com/dyanawu/" target="_blank">dyanawu <i className="fab fa-github"></i></a>
        </p>
      </footer>
    );
  }
}

module.exports = Foot;
