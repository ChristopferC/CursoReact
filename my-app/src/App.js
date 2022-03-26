import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Suspense } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';
import Componente404 from './Componente404';

function App() { 

    return (
      <Suspense fallback={<h3>Cargando ...</h3>}>
      <BrowserRouter>
          <div className="App" >
              <NavBar />  
              <Routes>
                <Route
                  path="/"
                  element={<ItemListContainer />}
                />
                <Route
                  path="/categoria/:id"
                  element={<ItemListContainer />}
                />
                <Route path='/detalle/:detalleId' 
                element={<ItemDetailContainer />}
                />
                <Route path='/notFound' 
                element={<Componente404 />} 
                />
                <Route path='/*' 
                element={<Navigate to='/' />} 
                />
              </Routes>   
          </div>
      </BrowserRouter>
  </Suspense>


    )
}

export default App;