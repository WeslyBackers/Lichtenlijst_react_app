import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

//import { Test } from './Lichtenlijst.styles';

import { Axios } from 'axios';
import Menu from '../Menu/Menu';
import GisInfo from '../GisInfo/GisInfo';
import LightsTable from '../LightsTable/LightsTable';

const axios = require('axios');

var data;

axios.get('http://192.168.68.70:50100/lichtenlijst')
  .then(function (response) {
    data = response;
  });

this.setState({data:data});

class Lichtenlijst extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      data:this.componentDidMount,
    };
  
  }

  componentDidMount = () => {

    console.log(this.state.data);
    
  }


  componentDidUpdate = () => {
    console.log('Lichtenlijst did update');

  }
Ò
 

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
