import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import propTypes from 'prop-types';

class Tile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let tiles = [];
    let roomNo = this.props.start + 1;
    for (let j = 0; j < this.props.detail.length; j++) {
      let imgArr = [];
      const imgCount = parseInt(this.props.detail[j][0]);
      for (let i = 0; i < imgCount; i++) {
        let bedImg = (
          <div className="tile-image icons" key={`${i}-tile-image icons`}>
            <FontAwesome name="bed" size="lg" key={`${i}-icon`} />
          </div>
        );
        imgArr.push(bedImg);
      }

      let tile = (
        <div className="tile" key={`${j}-tile`}>
          <div className="tile__body" align="center" key={`${j}-tile__body`}>
            <div className="images" key={`${j}-images`}>
              {imgArr}
            </div>
            <div key={j} className="bedroom-no">
              Bedroom {roomNo}
            </div>
            <div className="bed-detail" key={`${j}-bed-detail`}>
              {this.props.detail[j]}
            </div>
          </div>
        </div>
      );
      tiles.push(tile);
      roomNo++;
    }
    return (
      <div className="tile--display">
        <div
          className={
            this.props.leftArrow
              ? 'fa fa-arrow-circle-o-left enabled-arrow'
              : 'fa fa-arrow-circle-o-left disabled-arrow'
          }
          onClick={this.props.onLeftArrowClick}
        />
        {tiles}
        <div
          className={
            this.props.rightArrow
              ? 'fa fa-arrow-circle-o-right enabled-arrow'
              : 'fa fa-arrow-circle-o-right disabled-arrow'
          }
          onClick={this.props.onRightArrowClick}
        />
      </div>
    );
  }
}
Tile.propTypes = {
  leftArrow: propTypes.boolean,
  rightArrow: propTypes.boolean
};
Tile.defaultProps = { leftArrow: false, rightArrow: false };
export default Tile;
