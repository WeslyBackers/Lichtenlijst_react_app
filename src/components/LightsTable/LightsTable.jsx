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

  componentWillMount = () => {
    console.log('LightsTable will mount');
  }

  componentDidMount = () => {
    console.log('LightsTable mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('LightsTable will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('LightsTable will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('LightsTable did update');
  }

  componentWillUnmount = () => {
    console.log('LightsTable will unmount');
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
