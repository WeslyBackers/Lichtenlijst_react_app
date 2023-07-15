import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

//import { Test } from './Toolbar.styles';

class Toolbar extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }



  componentDidMount = () => {
    console.log('Toolbar mounted');
  }





  componentDidUpdate = () => {
    console.log('Toolbar did update');
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
