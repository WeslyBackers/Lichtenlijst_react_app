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
              <th className='text-center p-2 th_1'>VOLGNR.</th>
              <th className='text-center th_2'>GEBIED-PLAATS-NAAM</th>
              <th className='text-center th_3'>POSITIE GEO.</th>
              <th className='text-center th_4' >LICHT-EN MISTSEIN</th>
              <th className='text-center th_5'>HOOGTE</th>
              <th className='text-center th_6'>DRACHT</th>
              <th className='text-center th_7'>BESCHRIJVING</th>
              <th className='text-center th_8' >VERDERE GEGEVENS</th>
            </tr>
            <tr>
              <th className='text-center p-2 th_1'>(1)</th>
              <th className='text-center th_2'>(2)</th>
              <th className='text-center th_3'>(3)</th>
              <th className='text-center th_4'>(4)</th>
              <th className='text-center th_5'>(5)</th>
              <th className='text-center th_6'>(6)</th>
              <th className='text-center th_7'>(7)</th>
              <th className='text-center th_8'>(8)</th>
            </tr>
          </thead>

        </table>
      {this.props.tables}
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
