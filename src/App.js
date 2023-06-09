import './App.css';
import Menu from './components/Menu/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Book from './components/Book/Book';
import GisInfo from './components/GisInfo/GisInfo';


function App() {
  return (
    <div className="App">
        <Menu></Menu>
        <GisInfo></GisInfo>
        <Book></Book>
    </div>
  );
}

export default App;
