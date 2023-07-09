import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

//import { Test } from './Lichtenlijst.styles';

import { Axios } from 'axios';
import Menu from '../Menu/Menu';
import GisInfo from '../GisInfo/GisInfo';
import LightsTable from '../LightsTable/LightsTable';

const axios = require('axios');


class Lichtenlijst extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      data:this.componentDidMount,
    };
  
  }


  componentWillMount = () => {
    console.log('Lichtenlijst will mount');

  }

  componentDidMount = () => {
  axios.get('http://192.168.68.70:50100/lichtenlijst')
    .then(function (response) {
      var data = response;
      return(data);
    });

    
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Lichtenlijst will receive props', nextProps);
  
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Lichtenlijst will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Lichtenlijst did update');

  }

  componentWillUnmount = () => {
    console.log('Lichtenlijst will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="LichtenlijstWrapper">
        <Menu></Menu>
        <GisInfo></GisInfo>
        <LightsTable></LightsTable>
      </div>
    );
  }
}

Lichtenlijst.propTypes = {
  // bla: PropTypes.string,
};

Lichtenlijst.defaultProps = {
  // bla: 'test',
};

export default Lichtenlijst;
