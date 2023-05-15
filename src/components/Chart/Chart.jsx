import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { Marker } from 'react-leaflet';
import { Popup } from 'react-leaflet';



class Chart extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Chart will mount');
  }

  componentDidMount = () => {
    console.log('Chart mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Chart will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Chart will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Chart did update');
  }

  componentWillUnmount = () => {
    console.log('Chart will unmount');
  }

  render () {
    const position = [51.505, -0.09];
    
    if (this.state.hasError) {
      
      return <h1>Something went wrong.</h1>;
      
    }

    return (
      <div className="ChartWrapper map-id" id="map-id">
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>,
      </div>
    );
  }
}

Chart.propTypes = {
  // bla: PropTypes.string,
};

Chart.defaultProps = {
  // bla: 'test',
};

export default Chart;
