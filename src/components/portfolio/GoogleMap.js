import React from 'react'
import GoogleMapReact from 'google-map-react'
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const GoogleMap = () => {
    const defaultProps = {  
        center: {
            address: 'Dhaka Bangladesh.',
  lat: 37.42216,
  lng: -122.08427,
        },
        zoom: 11
    }
    
  return (
    <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={59.955413}
        lng={30.337844}
        text="My Marker"
      />
    </GoogleMapReact>
  </div>
  )
}
