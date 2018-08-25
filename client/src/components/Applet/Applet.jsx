import React, { Component } from 'react';
import Summary from './../Summary/Summary.js';
import Highlights from './../Highlights/Highlights.js';
import Details from './../Details/Details.js';
import Sleeping from './../Sleeping Arrangments/Sleeping.js';
import Rules from './../Rules/Rules.js';
import Cancellation from './../Cancellations/Cancellation.js';
import Amenities from './../Amenities/Amenities.js';

class Applet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: {}
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const id = parseInt(window.location.pathname.split('/').pop());
    const self = this;
    fetch(`/api/rooms/${id}/productinfo`)
      .then(response => response.json())
      .then(data => this.setState({ room: self.adapter(data) }))
      .catch(() => {
        console.log("error")});
  }

   adapter(room) {
    room = room.rows[0];
    room.house_rules = JSON.parse("[\"" + room.house_rules.replace(/\*/g ,"\",\"").slice(1,-1) + "\"]");
    room.cancellations = JSON.parse("[\"" + room.cancellations.replace(/\*/g ,"\",\"").slice(1,-1) + "\"]");
    room.sleeping_arrangements = JSON.parse("[\"" + room.sleeping_arrangements.replace(/\*/g ,"\",\"").slice(1,-1) + "\"]");
    room.amenities = JSON.parse("[" + room.amenities + "]");
    room.highlights = [
      "molestiae iusto",
      "Cupiditate ex deleniti sed illo explicabo non vero nihil non. Nobis esse non ut voluptas ut possimus deleniti. Maxime nostrum et tenetur. Consequatur ea sunt cupiditate et hic incidunt. Sit voluptatem ut ut consequatur neque impedit modi provident et. Sapiente fugit soluta provident debitis consequatur."
    ];
    return room;
  }


  render() {
    return (
      <div>
        <Summary className="summary section" room={this.state.room} />
        <Highlights
          className="highlights section"
          highlights={this.state.room.highlights}
        />
        <Details room={this.state.room} />
        {/* <div className="amenities section">amenities</div> */}
        <Amenities amenities={this.state.room.amenities} />
        <Sleeping beds={this.state.room.sleeping_arrangements} />
        <Rules room={this.state.room} />
        <Cancellation room={this.state.room} />
      </div>
    );
  }
}

export default Applet;
