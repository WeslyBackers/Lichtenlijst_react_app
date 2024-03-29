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

  componentDidMount = () => {
    console.log('Buttons mounted');
  }

  componentDidUpdate = () => {

    console.log('Buttons did update');

  }

  openJson = () => {
  
    console.log( "open JSON")
  
  }

  openGml = () => {
  
    console.log( "open GML")
  
  }

  openInleiding = () => {
  
    console.log( "open Inleiding")
  
  }

  openChart = () =>{
    var chart = document.getElementsByClassName('GisInfoWrapper');
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

  openWorkflow = () => {

    console.log('open Workflow')

  }


  openHistory =() => {
    console.log("open History")
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


 

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    var buttonslist = [    
    {'id':0,'caption':'JSON','function':this.openJson(this),'style':'primary'},
    {'id':1,'caption':'GML','function':this.openGml(this), 'style':'primary'},
    {'id':2,'caption':'Inleiding','function':this.openInleiding(this),'data_bs_toggle':'collapse','data_bs_target':'#inleiding','aria_controls':'collapseExample','aria_expanded':'false','style':'info'},
    {'id':3,'caption':'Kaart','function':this.openChart.bind(this),'data_bs_toggle':'collapse','data_bs_target':'#chart','aria_controls':'collapseExample','aria_expanded':'false','style':'primary'},
    {'id':4,'caption':'Print','function':this.printBook.bind(this),'style':'primary'},
    {'id':5,'caption':'Info data','function':this.openInfo.bind(this),'data_bs_toggle':'collapse','data_bs_target':'#info','aria_controls':'collapseExample','aria_expanded':'true','style':'primary'},
    {'id':6,'caption':'Werkwijze','function':this.openWorkflow(this),'style':'info'},
    {'id':7,'caption':'Geschiedenis','function':this.openHistory(this),'style':'info'}
  ]
  var buttons = []

  buttonslist.forEach((item, index) =>{
    buttons.push(
      <Button className='p-1 m-1'
        variant={item.style}
        name={item.caption} 
        id={item.id} 
        function={item.function} 
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
