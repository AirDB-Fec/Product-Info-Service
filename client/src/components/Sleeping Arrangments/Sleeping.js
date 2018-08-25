import React, { Component } from 'react';
import Tile from './Tile.js';

class Sleeping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 2,
      beds: [],
      isRightArrow: true,
      isLeftArrow: true
    };
    this.handleClickLeftArrow = this.handleClickLeftArrow.bind(this);
    this.handleClickRightArrow = this.handleClickRightArrow.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { beds } = nextProps;
    this.setState({
      beds: beds,
      isRightArrow: beds.length > 3,
      isLeftArrow: false
    });
  }

  handleClickRightArrow() {
    if (this.state.end + 1 <= this.state.beds.length - 1) {
      let newEnd = this.state.end + 1;
      let newStart = this.state.start + 1;

      this.setState({ end: newEnd, start: newStart, isLeftArrow: true });
      if (this.state.end === this.state.beds.length - 2) {
        this.setState({ isRightArrow: false });
      }
    }
  }

  handleClickLeftArrow() {
    let newStart;
    let newEnd;
    if (this.state.start - 1 >= 0) {
      newStart = this.state.start - 1;
      newEnd = this.state.end - 1;
      if (newStart === 0) {
        this.setState({ isLeftArrow: false });
      }
      this.setState({ start: newStart, end: newEnd, isRightArrow: true });
    }
  }

  render() {
    let allTiles = this.state.beds || [];
    let displayTiles = allTiles.slice(this.state.start, this.state.end + 1);

    return (
      <div className="sleeping section">
        <div className="section-wrapper">
          <div className="section-title">Sleeping arrangements</div>
          <Tile
            detail={displayTiles}
            rightArrow={this.state.isRightArrow}
            leftArrow={this.state.isLeftArrow}
            onRightArrowClick={this.handleClickRightArrow}
            onLeftArrowClick={this.handleClickLeftArrow}
            start={this.state.start}
            end={this.state.end}
          />
        </div>
      </div>
    );
  }
}
export default Sleeping;
