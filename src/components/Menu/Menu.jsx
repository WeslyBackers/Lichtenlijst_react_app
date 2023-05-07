import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import  { Container}   from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import Buttons from '../Buttons/Buttons';
import Titel from '../Titel/Titel';
import Appversion from '../Appversion/Appversion';
//import { Test } from './Menu.styles';

class Menu extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Menu will mount');
  }

  componentDidMount = () => {
    console.log('Menu mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Menu will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Menu will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Menu did update');
  }

  componentWillUnmount = () => {
    console.log('Menu will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="MenuWrapper">
        <Navbar bg="dark" expand="lg">
          <Container className='text-white'>
            <Buttons></Buttons>
            <Titel></Titel>
            <Appversion></Appversion>
          </Container>
        </Navbar>
      </div>
    );
  }
}

Menu.propTypes = {
  // bla: PropTypes.string,
};

Menu.defaultProps = {
  // bla: 'test',
};

export default Menu;
