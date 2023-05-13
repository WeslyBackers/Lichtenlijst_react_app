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

  componentWillMount = () => {
    console.log('Dataversion will mount');
  }

  componentDidMount = () => {
    console.log('Dataversion mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Dataversion will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Dataversion will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Dataversion did update');
  }

  componentWillUnmount = () => {
    console.log('Dataversion will unmount');
  }

  render () {

    const version ="2023-01";

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
