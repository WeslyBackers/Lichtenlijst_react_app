import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './LightsTable.styles';

class LightsTable extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }


  componentDidMount = () => {
    console.log('LightsTable mounted');
  }


  componentDidUpdate = () => {
    console.log('LightsTable did update');
  }



  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      
      <div className="LightsTableWrapper  p-2 table">
        <h4 className='h4-title'>Gegevens van de lichten</h4>
        <thead>
          <tr>
            <th>test</th>
            <th>test</th>
            <th>test</th>
            <th>test</th>
            <th>test</th>
            <th>test</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
          </tr>
          <tr>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
          </tr>
          <tr>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
          </tr>
          <tr>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
          </tr>
          <tr>
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

LightsTable.propTypes = {
  // bla: PropTypes.string,
};

LightsTable.defaultProps = {
  // bla: 'test',
};

export default LightsTable;
