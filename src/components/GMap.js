import React, { Component } from "react";

import GoogleMapReact from "google-map-react";

// import rpwIcon from '../img/ga-pin-street.png';
// import GMapInfoBox from './subcomponents/GMapInfoBox';
// import Directions from './subcomponents/GMapDirectionsBox';

class GMap extends Component {
  static defaultProps = {
    center: {
        lat: 41.2906039,
        lng: -73.4952177
    },
    zoom: 17
  };

renderMarkers(map, maps) {
    let marker = new maps.Marker({
      position: {
        lat: 41.2906039,
        lng: -73.4952177
      },
      map,
    //   icon: rpwIcon,
    //   title: 'RecessPlayworks'
    });
  }

  render() {
    const APIKey = process.env.GATSBY_GOOGLE_API_KEY;
    
    return (
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: APIKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
          yesIWantToUseGoogleMapApiInternals
        >
        </GoogleMapReact>
        {/* <GMapInfoBox/>
        <Directions/> */}
      </div>
    );
  }
}

export default GMap;