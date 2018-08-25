import React, { Component } from 'react';
import ReactModal from 'react-modal';
import Icons from './Icons.js';

if (process.env.NODE_ENV !== 'test') {
  ReactModal.setAppElement('div');
}

class Amenities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopUp: false
    };
    this.handleClickShowAll = this.handleClickShowAll.bind(this);
    this.handleClosePopUp = this.handleClosePopUp.bind(this);
  }

  handleClickShowAll() {
    this.setState({ showPopUp: true });
  }

  handleClosePopUp() {
    this.setState({ showPopUp: false });
  }

  formObject(arr) {
    let amenitiesArr = arr.slice();
    let amenitiesObj = {};
    for (let i = 0; i < amenitiesArr.length; i++) {
      let type = amenitiesArr[i].amenityType;
      let obj = {
        name: amenitiesArr[i].name,
        icon: amenitiesArr[i].icon,
        explanation: amenitiesArr[i].explanation
      };
      if (amenitiesObj[type]) {
        amenitiesObj[type].push(obj);
      } else {
        amenitiesObj[type] = [obj];
      }
    }
    return amenitiesObj;
  }

  renderModal() {
    let amenitiesArr = this.props.amenities;

    if (typeof amenitiesArr !== 'object') {
      amenitiesArr = [
        {
          _id: '5b591d928f0a5f0970152179',
          amenityType: 'Bed and bath',
          name: 'Hair dryer',
          icon: '',
          explanation: ''
        }
      ];
    }

    let amenitiesObj = this.formObject(amenitiesArr);
    let renderArr = [];
    const types = Object.keys(amenitiesObj);
    renderArr = types.map((type, index) => {
      return (
        <div className="amenity__type" key={type}>
          <p className="type-title">{type}</p>
          {amenitiesObj[type].map((amenity, i) => {
            let clName = 'amenity__name';
            return (
              <div className={clName} key={i}>
                {amenitiesObj[type][i].name}
                {(amenitiesObj[type][i].explanation.length > 0  && amenitiesObj[type][i].explanation !== "0") ? (
                  <div className="amenity__exp" key={`exp${i}`}>
                    {' '}
                    {amenitiesObj[type][i].explanation}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      );
    });

    return renderArr;
  }

  render() {
    let amenitiesArr = this.props.amenities;

    if (typeof amenitiesArr !== 'object') {
      amenitiesArr = [
        {
          _id: '5b591d928f0a5f0970152179',
          amenityType: 'Bed and bath booo',
          name: 'Hair dryer boooo',
          icon: '',
          explanation: ''
        }
      ];
    }
    return (
      <div className="amenities section">
        <div className="section-wrapper">
          <div className="section-title">Amenities</div>
          <div className="icons-display">
            <Icons amenities={amenitiesArr} />
          </div>
          <a className="toggle-more" onClick={this.handleClickShowAll}>
            {' '}
            Show all {amenitiesArr.length} amenities{' '}
          </a>
          {this.state.showPopUp ? (
            <ReactModal
              isOpen={this.state.showPopUp}
              onRequestClose={() => this.handleClosePopUp()}
              shouldCloseOnOverlayClick={true}
              shouldCloseOnEsc={true}
              style={{
                content: {
                  padding: '2rem'
                }
              }}
            >
              <i
                className="fa fa-times"
                aria-hidden="true"
                size="lg"
                onClick={() => this.handleClosePopUp()}
              />
              <div className="modal-popup">{this.renderModal()}</div>
            </ReactModal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Amenities;
