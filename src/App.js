//import components
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lichtenlijst from './components/Lichtenlijst/Lichtenlijst';
//import modules


//global app declarations


function App() {


  return (
    <div className="App" data={window.data}>
      <Lichtenlijst></Lichtenlijst>
    </div>
  );
}


export default App;
