const React = require('react');
const AuthContent = require('./authcontent');

class TripList extends AuthContent {
  constructor (props) {
    super(props);
    this.title = "Trip List";
  }

  showContent() {
    let tripData = this.props.trips;
    console.log(tripData);
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
            <a href={link} className="text-info">{trip.name}</a>
          </td>
          <td>{trip.start.toLocaleDateString(undefined, dateOpts)}</td>
          <td>{trip.destination}</td>
          <td>{trip.country}</td>
          <td>{trip.operator}</td>
        </tr>
      );
    });
    return (
      <div className="my-3"
           style={{overflowY: "scroll", maxHeight: "80vh"}}>
        <table className="table table-hover">
          <thead className="bg-info text-white">
            <tr>
              <th scope="col">Trip</th>
              <th scope="col">Trip Start Date</th>
              <th scope="col">Destination</th>
              <th scope="col">Country</th>
              <th scope="col">Operator</th>
            </tr>
          </thead>
          <tbody>
            {trips}
          </tbody>
        </table>
      </div>
    );
  }
}

module.exports = TripList;
