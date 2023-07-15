import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './ObjectInfo.styles';
import { Card } from 'react-bootstrap';
import '../../css/ObjectInfo.css';

class ObjectInfo extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }



  componentDidMount = () => {
    console.log('ObjectInfo mounted');
  }





  componentDidUpdate = () => {
    console.log('ObjectInfo did update');
  }



  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ObjectInfoWrapper flex row m-2 p-2 text-white border-dark">
        <Card className='bg-light'></Card>
      </div>
    );
  }
}

ObjectInfo.propTypes = {
  // bla: PropTypes.string,
};

ObjectInfo.defaultProps = {
  // bla: 'test',
};

export default ObjectInfo;
