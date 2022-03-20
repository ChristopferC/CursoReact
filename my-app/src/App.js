import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Suspense } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';

function App() { 

    return (
      <Suspense fallback={<h3>Cargando ...</h3>}>
      <BrowserRouter>
          <div className="App" >
              <NavBar />     
              <Routes>
                  <Route 
                      path="/" 
                      element={
                          <ItemListContainer 
                              saludo= 'Bienvenido' 
                          />
                      } 
                  />
              </Routes>
          </div>
      </BrowserRouter>
  </Suspense>


    )
}

export default App;