import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import  { Container } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
//import { Test } from './Appversion.styles';

class Appversion extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }



  componentDidMount = () => {
    console.log('Appversion mounted');
  }




  componentDidUpdate = () => {
    console.log('Appversion did update');
  }



  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="AppversionWrapper">
          <Badge bg="info mx-4 p-1">v1.0</Badge>
      </div>
    );
  }
}

Appversion.propTypes = {
  // bla: PropTypes.string,
};

Appversion.defaultProps = {
  // bla: 'test',
};

export default Appversion;
