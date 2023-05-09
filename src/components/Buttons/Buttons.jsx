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

  printBook = () => {
    console.log('print book');
  }

  openInfo = () =>{
    console.log('test');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    var buttonslist = [    
    {'id':0,'caption':'JSON','function':this.openJson},
    {'id':1,'caption':'GML','function':this.openGml},
    {'id':2,'caption':'Inleiding','function':this.openInleiding,'data_bs_toggle':'collapse','data_bs_target':'#inleiding','aria_controls':'collapseExample','aria_expanded':'false'},
    {'id':3,'caption':'Kaart','function':this.openChart,'data_bs_toggle':'collapse','data_bs_target':'#chart','aria_controls':'collapseExample','aria_expanded':'false'},
    {'id':4,'caption':'Print','function':this.printBook.bind(this)},
    {'id':5,'caption':'Info data','function':this.openInfo.bind,'data_bs_toggle':'collapse','data_bs_target':'#info','aria_controls':'collapseExample','aria_expanded':'true'},
    {'id':6,'caption':'Werkwijze','function':this.openWorkflow},
    {'id':7,'caption':'Geschiedenis','function':this.openHistory}
  ]
  var buttons = []

  buttonslist.forEach((item, index) =>{
    buttons.push(
      <Button className='p-1 m-1'
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
      <div className="ButtonsWrapper flex-grow">
        <Container>
          {buttons}
        </Container>
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
