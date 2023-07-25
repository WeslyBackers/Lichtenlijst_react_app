import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

//import { Test } from './Lichtenlijst.styles';

import { Axios } from 'axios';
import Menu from '../Menu/Menu';
import GisInfo from '../GisInfo/GisInfo';
import LightsTable from '../LightsTable/LightsTable';
import ZoneTable from '../ZoneTable';

const axios = require('axios');

var zones = [];
var tables;


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

    //console.log('test');

    this.getZones();

  }

  getZones = () => {
    /** Bepaal de verschillende zones van de lichtenlijst en maak de tabellen aan */
    
    //console.log(this.state.data.features[0]);

    for (let x=0; x < this.state.data.features.length; x++){

        //console.log(this.state.data.features[x]['properties']['llzone']);

        if(zones.indexOf(this.state.data.features[x]['properties']['llzone']) < 0){

          zones.push(this.state.data.features[x]['properties']['llzone']);
  
      }
    }
    zones.sort();
    
    tables = zones.map((item,i)=> <ZoneTable key={i} title={item}></ZoneTable>);
    //console.log(tables);
  }

  render () {
    
   
  

    if (this.state.hasError) {
    
      return <h1>Something went wrong.</h1>;
    }


    return (

      <div className="LichtenlijstWrapper">

        <Menu></Menu>
        <GisInfo></GisInfo>
        <LightsTable key="1" tables={tables}>{tables}</LightsTable>
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
