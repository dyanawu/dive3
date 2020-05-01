const React = require('react');
const AuthContent = require('./authcontent');

class DiveForm extends AuthContent {
  constructor (props) {
    super(props);
    this.title = "Dive Form";
  }

  showContent() {
    let lastDiveNo = this.props.lastDiveNo
    let nextDiveNo = this.props.nextDiveNo;
    let tripName = this.props.tripName;
    const dateOpts = {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    };
    let trips = this.props.trips.map(trip => {
      let key = `trip-${trip.id}`;
      let tripStart = trip.start.toLocaleDateString(undefined, dateOpts);
      if (trip.name === tripName) {
        return <option key={key} value={trip.id} selected>{trip.name} ({tripStart})</option>
      } else {
        return <option key={key} value={trip.id}>{trip.name} ({tripStart})</option>
      }
    });

    return (
      <>

        <div className="container text-info">

          <div className="row">
            <div className="col-sm-12 col-md-8 offset-md-2">

              <form method="POST">

                <div className="form-row">
                  <div className="form-group col">
                    <label>Trip</label>
                    <select name="trip_id"
                            className="custom-select">
                      {trips}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-6">
                    <label>Dive Site</label>
                    <input type="text"
                           className="form-control"
                           name="site"
                           placeholder="Dive Site"
                    />
                  </div>

                  <div className="form-group col-6">
                    <label>Dive # (last dive: #{lastDiveNo})</label>
                    <input type="text"
                           className="form-control"
                           name="dive_no"
                           placeholder="Dive Number"
                           defaultValue={nextDiveNo}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col">
                    <label>Date</label>
                    <input
                      className="form-control"
                      name="date"
                      data-provide="datepicker"
                      data-date-format="yyyy-mm-dd"
                      placeholder="Dive Date"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-6">
                    <label>Time In</label>
                    <input
                      className="form-control"
                      name="time_in"
                      type="time"
                    />
                  </div>
                  <div className="form-group col-6">
                    <label>Time Out</label>
                    <input
                      className="form-control"
                      name="time_out"
                      type="time"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-6">
                    <label>Max. Depth (m)</label>
                    <input
                      className="form-control"
                      name="max_depth"
                    />
                  </div>
                  <div className="form-group col-6">
                    <label>Avg. Depth (m)</label>
                    <input
                      className="form-control"
                      name="avg_depth"
                    />
                  </div>
                </div>

                <div className="form-row mb-3">
                  <div className="col">
                    <label>Notes</label>
                    <textarea
                      className="form-control"
                      name="notes"
                      rows="10"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col">
                    <button id="upload_widget"
                            className="btn btn-block btn-info">Upload image</button>

                    <script src="https://widget.cloudinary.com/v2.0/global/all.js"
                            type="text/javascript"></script>

                    <script type="text/javascript" src="/script/cloud.js"></script>
                    <input type="hidden" id="cloudimageid" name="img_pubid" defaultValue=""/>
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

module.exports = DiveForm;
