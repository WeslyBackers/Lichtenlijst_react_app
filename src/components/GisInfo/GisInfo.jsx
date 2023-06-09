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

  componentWillMount = () => {
    console.log('GisInfo will mount');
  }

  componentDidMount = () => {
    console.log('GisInfo mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('GisInfo will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('GisInfo will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('GisInfo did update');
  }

  componentWillUnmount = () => {
    console.log('GisInfo will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="GisInfoWrapper d-flex flex-fill">
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
