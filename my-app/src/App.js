import logo from './logo.svg';
import './App.css';
import {BrouserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <router>
        <NavBar/>
      </router>
    </div>
  );
}

export default App;
