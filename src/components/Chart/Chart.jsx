import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { useMap } from 'react-leaflet/hooks';



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
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ChartWrapper">
        <MapContainer></MapContainer>
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
