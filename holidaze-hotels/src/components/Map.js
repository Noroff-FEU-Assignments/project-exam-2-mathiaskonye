import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div><p>{text}</p> <i class="fas fa-map-marker-alt"></i></div>;
 
class SimpleMap extends Component {
    


  static defaultProps = {
    center: {
      lat: 43.56,
      lng: 7.11
    },
    zoom: 11
  };
 
  render() {
    return (
      <div className="mb-5" style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA-mkoDFuYMTGZ2oHfdi6H3beTxAeid-RI"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={43.5696126198061}
            lng={7.111840528615907}
            text=""
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;