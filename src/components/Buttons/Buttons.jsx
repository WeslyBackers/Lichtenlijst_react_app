import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import  { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
//import { Test } from './Buttons.styles';

class Buttons extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Buttons will mount');
  }

  componentDidMount = () => {
    console.log('Buttons mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Buttons will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {

    console.log('Buttons will update', nextProps, nextState);

  }

  componentDidUpdate = () => {

    console.log('Buttons did update');

  }

  componentWillUnmount = () => {

    console.log('Buttons will unmount');

  }

  openFullscreen = () => {
    var chart = document.getElementsByClassName('ChartWrapper');
    if (chart.requestFullscreen) {
      chart.requestFullscreen();
    } else if (document.webkitRequestFullscreen) { /* Safari */
      chart.webkitRequestFullscreen();
    } else if (document.msRequestFullscreen) { /* IE11 */
      chart.msRequestFullscreen();
    }
  }

  closeFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }


  openChart = () =>{
    var chart = document.getElementsByClassName('ChartWrapper');
    console.log(chart);
    // chart[0] is first tag with specifications about elements' classnames
    console.log(chart[0].classList);
    //this.openFullscreen();
    //this.closeFullscreen();

    if (chart[0].classList.contains('visually-hidden'))

    {

      chart[0].classList.remove('visually-hidden');

    }

    else{

      chart[0].classList.add('visually-hidden');

    }
    
    

  }


  printBook = () => {
    window.print();
  }

  openInfo = () =>{
    console.log('test');
  }



  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    var buttonslist = [    
    {'id':0,'caption':'JSON','function':this.openJson,'style':'primary'},
    {'id':1,'caption':'GML','function':this.openGml, 'style':'primary'},
    {'id':2,'caption':'Inleiding','function':this.openInleiding,'data_bs_toggle':'collapse','data_bs_target':'#inleiding','aria_controls':'collapseExample','aria_expanded':'false','style':'info'},
    {'id':3,'caption':'Kaart','function':this.openChart.bind(this),'data_bs_toggle':'collapse','data_bs_target':'#chart','aria_controls':'collapseExample','aria_expanded':'false','style':'primary'},
    {'id':4,'caption':'Print','function':this.printBook.bind(this),'style':'primary'},
    {'id':5,'caption':'Info data','function':this.openInfo.bind(this),'data_bs_toggle':'collapse','data_bs_target':'#info','aria_controls':'collapseExample','aria_expanded':'true','style':'primary'},
    {'id':6,'caption':'Werkwijze','function':this.openWorkflow,'style':'info'},
    {'id':7,'caption':'Geschiedenis','function':this.openHistory,'style':'info'}
  ]
  var buttons = []

  buttonslist.forEach((item, index) =>{
    buttons.push(
      <Button className='p-1 m-1'
      variant={item.style}
      name={item.caption} 
      id={item.id} 
      functions={item.function} 
      data_bs_toggle={item.data_bs_toggle} 
      data_bs_target={item.data_bs_target} 
      aria_controls={item.aria_controls} 
      aria_expanded={item.aria_expanded}
      key={item.id}
      onClick={item.function}>
      {item.caption}
      </Button>)
  })


    return (
      <div className="ButtonsWrapper mx-4 justify-content-start">
          {buttons}
      </div>
    );
  }
}

Buttons.propTypes = {
  // bla: PropTypes.string,
};

Buttons.defaultProps = {
  // bla: 'test',
};

export default Buttons;
