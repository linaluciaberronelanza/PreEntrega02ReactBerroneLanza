import React from 'react';
import Contador from './componentes/Contador/Contador';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarra from './Componentes/NavBarra/NavBarra';

const App = () => {
  return (
    <>

      <BrowserRouter>
        <NavBarra/>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App