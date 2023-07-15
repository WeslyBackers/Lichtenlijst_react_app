import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Dataversion from '../Dataversion/Dataversion';

//import { Test } from './Titel.styles';

class Titel extends PureComponent { 
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }



  componentDidMount = () => {
    console.log('Titel mounted');
  }




  componentDidUpdate = () => {
    console.log('Titel did update');
  }



  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="TitelWrapper text-white mt-1">
        <div className='d-flex'><h3>Lichtenlijst</h3><div>&nbsp;</div><Dataversion></Dataversion></div>
      </div>
    );
  }
}

Titel.propTypes = {
  // bla: PropTypes.string,
};

Titel.defaultProps = {
  // bla: 'test',
};

export default Titel;
