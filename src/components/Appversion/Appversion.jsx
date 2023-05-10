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

  componentWillMount = () => {
    console.log('Appversion will mount');
  }

  componentDidMount = () => {
    console.log('Appversion mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Appversion will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Appversion will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Appversion did update');
  }

  componentWillUnmount = () => {
    console.log('Appversion will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="AppversionWrapper row-1">
        <Container>
          <Badge bg="info p-2">v1.0</Badge>
        </Container>
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
