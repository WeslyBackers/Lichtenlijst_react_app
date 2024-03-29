import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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
      data:[],
    };
  }



  componentDidMount = () => {
    console.log('Menu mounted');
  
  }



  componentDidUpdate = () => {
    console.log('Menu did update');
  }

 

  render () {
    console.log(this.state.data);
    if (this.state.hasError) {

      return <h1>Something went wrong.</h1>;

    }

    return (

      <div className="MenuWrapper">
        <Navbar className="justify-content-between" bg="dark" expand="lg">
            <Buttons></Buttons>
            <Titel></Titel>
            <Appversion></Appversion>
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
