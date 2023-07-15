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



  componentDidMount = () => {
    console.log('Book mounted');
  }



  componentDidUpdate = () => {
    console.log('Book did update');
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
