import logo from './logo.svg';
import './App.css';
import {BrouserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import CartWidget from './components/CartWidget'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
