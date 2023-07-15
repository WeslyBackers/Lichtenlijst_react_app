import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Dataversion.styles';

class Dataversion extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }



  componentDidMount = () => {
    console.log('Dataversion mounted');
  }





  componentDidUpdate = () => {
    console.log('Dataversion did update');
  }



  render () {

    const version ="2023-03";

    if (this.state.hasError) {

      return <h1>Something went wrong.</h1>;
    }
    
    return (
      <div className="DataversionWrapper text-white">
        <h3>{version}</h3>
      </div>
    );
  }
}

Dataversion.propTypes = {
  // bla: PropTypes.string,
};

Dataversion.defaultProps = {
  // bla: 'test',
};

export default Dataversion;
