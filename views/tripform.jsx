const React = require('react');
const AuthContent = require('./authcontent');

class TripForm extends AuthContent {
  constructor (props) {
    super(props);
    this.title = "Trip Form";
  }

  showContent() {
    let countries = this.props.countries.map(country => {
      let key = `country-${country.id}`;
      return <option key={key}>{country.name}</option>
    });
    let destinations = this.props.destinations.map(destination => {
      let key = `destination-${destination.id}`;
      return <option key={key}>{destination.name}</option>
    });
    let operators = this.props.operators.map(operator => {
      let key = `operator-${operator.id}`;
      return <option key={key}>{operator.name}</option>
    });

    return (
      <>

        <div className="container text-info">

          <div className="row">
            <div className="col-8 offset-2">

              <form action="/trip/new" method="POST">

                <div className="form-row">
                  <div className="form-group col">
                    <label>Trip Name</label>
                    <input type="text"
                           className="form-control"
                           name="name"
                           placeholder="Trip Name"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col">
                    <label>Trip Start Date</label>
                    <input
                      className="form-control"
                      name="start"
                      data-provide="datepicker"
                      data-date-format="yyyy-mm-dd"
                      placeholder="Trip Start Date"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-6">
                    <label>Country</label>
                    <input type="text"
                           className="form-control"
                           list="countries"
                           name="country"
                           placeholder="Country"
                    />
                    <datalist id="countries">
                      <option selected>Select below or type to add a new country:</option>
                      {countries}
                    </datalist>
                  </div>
                  <div className="form-group col-6">
                    <label>Destination</label>
                    <input type="text"
                           className="form-control"
                           list="destinations"
                           name="destination"
                           placeholder="Destination"
                    />
                    <datalist id="destinations">
                      <option selected>Select below or type to add a new destination:</option>
                      {destinations}
                    </datalist>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col">
                    <label>Operator</label>
                    <input type="text"
                           className="form-control"
                           list="operators"
                           name="operator"
                           placeholder="Operator"
                    />
                    <datalist id="operators">
                      <option selected>Select below or type to add a new operator:</option>
                      {operators}
                    </datalist>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col">
                    <input type="submit"
                           className="btn btn-block btn-info"
                    />
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </>
    );
  }
}

module.exports = TripForm;
