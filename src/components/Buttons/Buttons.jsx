import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import  { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
//import { Test } from './Buttons.styles';

class Buttons extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Buttons will mount');
  }

  componentDidMount = () => {
    console.log('Buttons mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Buttons will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Buttons will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Buttons did update');
  }

  componentWillUnmount = () => {
    console.log('Buttons will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ButtonsWrapper col-4">
        <Container>
          <Button>button 1</Button>
        </Container>
      </div>
    );
  }
}

Buttons.propTypes = {
  // bla: PropTypes.string,
};

Buttons.defaultProps = {
  // bla: 'test',
};

export default Buttons;
