import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Tab, Table } from 'react-bootstrap';
//import { Test } from './ZoneTable.styles';
import '../../css/Zonetable.css';

class ZoneTable extends PureComponent { 
  constructor(props) {

    super(props);

    this.state = {

      hasError: false,

    };

    console.log(props);

  }

  componentDidMount = () => {
    console.log(this.props.title);
  }


  componentDidUpdate = () => {
    console.log('ZoneTable did update');
  }

 
  render () {
    if (this.state.hasError) {

      return <h1>Something went wrong.</h1>;

    }

    return (

      <div className="ZoneTableWrapper m-2">
        <h6 className='h6 zone_title'>{this.props.title}</h6>
        <Table striped className='striped' name={this.props.title}>
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
        </Table>
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
