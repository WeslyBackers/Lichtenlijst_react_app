import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LightsTable from '../LightsTable/LightsTable';
//import { Test } from './Book.styles';

class Book extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Book will mount');
  }

  componentDidMount = () => {
    console.log('Book mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Book will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Book will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Book did update');
  }

  componentWillUnmount = () => {
    console.log('Book will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="BookWrapper">
        <h3>Lichtenlijst</h3>
        <LightsTable></LightsTable>
      </div>
    );
  }
}

Book.propTypes = {
  // bla: PropTypes.string,
};

Book.defaultProps = {
  // bla: 'test',
};

export default Book;
