import logo from './logo.svg';
import './App.css';
import {BrouserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import CartWidget from './components/CartWidget'

const ItemListContainer = () =>{
  return <div><h2>Le damos la bienvenida</h2></div>
}

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
