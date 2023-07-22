import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './ZoneTable.styles';

class ZoneTable extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidMount = () => {
    console.log('ZoneTable mounted');
  }


  componentDidUpdate = () => {
    console.log('ZoneTable did update');
  }

 
  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ZoneTableWrapper">
        <h3>Zone Titel</h3>
        <tbody>
          <tr>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
          </tr>
        </tbody>
      </div>
    );
  }
}

ZoneTable.propTypes = {
  // bla: PropTypes.string,
};

ZoneTable.defaultProps = {
  // bla: 'test',
};

export default ZoneTable;
