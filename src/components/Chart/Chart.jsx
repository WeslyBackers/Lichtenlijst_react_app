import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
//import to insert this leaflet css
import "leaflet/dist/leaflet.css";
import "../../css/Chart.css";

class Chart extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log("Chart will mount");
  };

  componentDidMount = () => {
    console.log("Chart mounted"); 
    
  };

  componentWillReceiveProps = (nextProps) => {
    console.log("Chart will receive props", nextProps);
  };

  componentWillUpdate = (nextProps, nextState) => {
    console.log("Chart will update", nextProps, nextState);
  };

  componentDidUpdate = () => {
    console.log("Chart did update");
  };

  componentWillUnmount = () => {
    console.log("Chart will unmount");
  };

  openFullscreen = () => {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }
  
  /* Close fullscreen */
  closeFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }

  render() {
    const position = [51.305, 3.0];

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <div className="ChartWrapper map-id flex row col" id="map-id">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> '
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
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
