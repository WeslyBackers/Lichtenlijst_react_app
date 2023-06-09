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

  componentWillMount = () => {
    console.log('ObjectInfo will mount');
  }

  componentDidMount = () => {
    console.log('ObjectInfo mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('ObjectInfo will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('ObjectInfo will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('ObjectInfo did update');
  }

  componentWillUnmount = () => {
    console.log('ObjectInfo will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ObjectInfoWrapper bg-light text-white border-dark">
        <Card className=''></Card>
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
