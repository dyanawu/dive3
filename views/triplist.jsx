const React = require('react');
const AuthContent = require('./authcontent');

class TripList extends AuthContent {
  constructor (props) {
    super(props);
    this.title = "Trip List";
  }

  showContent() {
    let tripData = this.props.trips;
    const dateOpts = {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    };
    let trips = tripData.map(trip => {
      let key = `trip-${trip.id}`;
      let link = `/trip/${trip.id}`;

      return (
        <tr key={key} className="text-info">
          <td>
            <a href={link} className="link-info">{trip.name}</a>
          </td>
          <td>{trip.start.toLocaleDateString(undefined, dateOpts)}</td>
          <td>{trip.destination}, {trip.country}</td>
          <td>{trip.operator}</td>
        </tr>
      );
    });

    return (
      <>
        <div className="row" key="button">
          <div className="col">
            <a href="/trip/new/"
               className="btn btn-outline-info btn-block">
              <span className="h5">Add New Trip</span>
            </a>
          </div>
        </div>

        <div className="row my-3"
             style={{overflowY: "scroll", maxHeight: "60vh"}} key="table">
          <div className="col">
            <table className="table table-hover">
              <thead className="bg-info text-white">
                <tr>
                  <th scope="col">Trip</th>
                  <th scope="col">Trip Start Date</th>
                  <th scope="col">Destination</th>
                  <th scope="col">Operator</th>
                </tr>
              </thead>
              <tbody>
                {trips}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

module.exports = TripList;
