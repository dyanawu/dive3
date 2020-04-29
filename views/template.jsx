const React = require('react');
const Head = require('./head');
const Foot = require('./foot');

class Template extends React.Component {
  constructor (props) {
    super(props);
    this.title = props.title || "Page";
  }

  render() {
    return (
      <html className="h-100">
        <head>
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/fontawesome/css/all.min.css" />
          <link rel="stylesheet" href="/css/bootstrap-datepicker.min.css" />
          <script src="/script/jquery-3.0.0.min.js"></script>
          <script src="/script/bootstrap.bundle.min.js"></script>
          <script src="/script/bootstrap-datepicker.min.js"></script>
          <title>{this.title}</title>
        </head>

        <body className="d-flex flex-column h-100">

          <div className="container-fluid d-flex flex-column h-100">

            <div className="row bg-info text-white d-flex flex-row justify-content-between"
                 style={{height: "4em"}}>
              <Head />
            </div>

            {this.renderContent()}

          </div>

          <Foot />

        </body>
      </html>
    );
  }
}

module.exports = Template;
