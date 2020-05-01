const React = require('react');
const AuthContent = require('./authcontent');

class TripDiveList extends AuthContent {
  constructor (props) {
    super(props);
    this.title = `Trip: ${this.props.tripname}`;
  }

  showContent() {
    let newDiveLink = `${this.props.tripid}/dive/new`;
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
      dive.notes = dive.notes || "No notes taken.";
      return (
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3 px-1">
          <div className="card border-info text-monospace">
            <div className="card-header text-white bg-info d-flex justify-content-around align-content-center">
              <h4 className="mb-0">#{dive.dive_no} @ {dive.site}</h4>
            </div>
            <div className="card-body">
              <div className="text-secondary">
              <span>Date: {dive.time_in.toLocaleDateString(undefined, dateOpts)}</span><br />
              <span>Time in: {dive.time_in.toLocaleTimeString(undefined, timeOpts)}hrs</span><br />
              <span>Time out: {dive.time_out.toLocaleTimeString(undefined, timeOpts)}hrs</span><br />
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
        <div className="row">
          <div className="col">
            <a href={newDiveLink}
               className="btn btn-outline-info btn-block">
              <span className="h5">Add New Dive to This Trip</span>
            </a>
          </div>
        </div>

        <div className="row my-3 px-3 resizethis"
             style={{overflowY: "scroll", maxHeight: "82vh"}}>
          {diveCards}
        </div>
      </>

    );
  }
}

module.exports = TripDiveList;
