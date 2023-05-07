import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Titel.styles';

class Titel extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Titel will mount');
  }

  componentDidMount = () => {
    console.log('Titel mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Titel will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Titel will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Titel did update');
  }

  componentWillUnmount = () => {
    console.log('Titel will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="TitelWrapper fs-2">
        Lichtenlijst
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
