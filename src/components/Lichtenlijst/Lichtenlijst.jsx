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
      data:"test",
    }

  }

  componentDidMount = () => {


    axios.get('http://192.168.68.70:50100/lichtenlijst')

    .then((response) => {

      //console.log(response);
      this.setState({data:response.data})
      //console.log(this.state);

    });


    
  }

  componentDidUpdate = () => {

    console.log('test');
    this.getZones();
  }

  getZones = () => {

    console.log(this.state.data);
  
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
