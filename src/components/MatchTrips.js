import React, { Component } from "react";
import TripServices from "../services/TripServices";

class MatchTrips extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tripId: this.props.match.params.tripId,
      //tripId: "4",
    };
  }

  componentDidMount() {
    console.log(this.state.tripId);
    TripServices.GetmatchTrip(this.state.tripId).then((res) => {
      console.log(res);
    });
  }
  render() {
    return <div>lund</div>;
  }
}

export default MatchTrips;
