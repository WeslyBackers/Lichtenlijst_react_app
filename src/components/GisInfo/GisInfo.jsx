import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
//import { Test } from './GisInfo.styles';
import Chart from '../Chart/Chart';
import ObjectInfo from '../ObjectInfo/ObjectInfo';

class GisInfo extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }



  componentDidMount = () => {
    console.log('GisInfo mounted');
  }




  componentDidUpdate = () => {
    console.log('GisInfo did update');
  }


  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="GisInfoWrapper d-flex flex-items col">
        <Chart></Chart>
        <ObjectInfo></ObjectInfo>
      </div>
    );
  }
}

GisInfo.propTypes = {
  // bla: PropTypes.string,
};

GisInfo.defaultProps = {
  // bla: 'test',
};

export default GisInfo;
