const React = require('react');
const AuthContent = require('./authcontent');

class TripDiveList extends AuthContent {
  constructor (props) {
    super(props);
    this.title = `Trip: ${this.props.tripname}`;
  }

  showContent() {
    let dives = this.props.dives;
    const dateOpts = {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    };
    let timeOpts = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    };

    let diveCards = dives.map(dive => {
      return (
        <div className="col-sm-4 mb-3 px-1">
          <div className="card border-info text-monospace">
            <div className="card-header text-white bg-info"># {dive.dive_no}</div>
            <div className="card-body">
              <h5 className="card-title text-info">Site: {dive.site}</h5>
              <div className="text-secondary">
              <span>Date: {dive.time_in.toLocaleDateString(undefined, dateOpts)}</span><br />
              <span>Time in: {dive.time_in.toLocaleTimeString(undefined, timeOpts)}</span><br />
              <span>Time out: {dive.time_out.toLocaleTimeString(undefined, timeOpts)}</span><br />
              <span>Max. depth: {dive.max_depth}m</span><br />
              <span>Avg. depth: {dive.avg_depth}m</span><br /><br />
              </div>
              <span>Notes:</span>
              <p>{dive.notes}</p>
            </div>
          </div>
        </div>
      )
    });


    return (
      <>
        <div className="row my-3">
          <div className="col">
            <a href="/dive/new/"
               className="btn btn-outline-info btn-block">
              <span className="h5">Add New Dive</span>
            </a>
          </div>
        </div>

        <div className="row my-3 px-3"
             style={{overflowY: "scroll", maxHeight: "60vh"}}>
          {diveCards}
        </div>
      </>

    );
  }
}

module.exports = TripDiveList;
