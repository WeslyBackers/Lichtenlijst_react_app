import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu/Menu';

//import { Test } from './Toolbar.styles';

class Toolbar extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Toolbar will mount');
  }

  componentDidMount = () => {
    console.log('Toolbar mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Toolbar will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Toolbar will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Toolbar did update');
  }

  componentWillUnmount = () => {
    console.log('Toolbar will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ToolbarWrapper">
        Test content
      </div>
    );
  }
}

Toolbar.propTypes = {
  // bla: PropTypes.string,
};

Toolbar.defaultProps = {
  // bla: 'test',
};

export default Toolbar;
