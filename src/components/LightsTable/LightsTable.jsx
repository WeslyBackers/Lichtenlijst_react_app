import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './LightsTable.styles';

//import CSS
import '../../css/Lightstable.css';

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
      
      <div className="LightsTableWrapper table table-bordered">
        <h4 className='h4-title'>Gegevens van de lichten</h4>
        <table className=''>
          <thead>
            <tr>
              <th className='text-center p-2'>VOLGNR.</th>
              <th className='text-center'>GEBIED-PLAATS-NAAM</th>
              <th className='text-center'>POSITIE GEO.</th>
              <th className='text-center' >LICHT-EN MISTSEIN</th>
              <th className='text-center'>HOOGTE</th>
              <th className='text-center'>DRACHT</th>
              <th className='text-center'>BESCHRIJVING</th>
              <th className='text-center'>VERDERE GEGEVENS</th>
            </tr>
            <tr>
              <th className='text-center p-2'>(1)</th>
              <th className='text-center'>(2)</th>
              <th className='text-center'>(3)</th>
              <th className='text-center'>(4)</th>
              <th className='text-center'>(5)</th>
              <th className='text-center'>(6)</th>
              <th className='text-center'>(7)</th>
              <th className='text-center'>(8)</th>
            </tr>
          </thead>
        </table>
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
