import React from 'react'
import './ItemListContainer.css';

const ItemListContainer = ({ saludo }) => {
  return (
    <h2 className='textoSaludo'>{saludo}</h2>
  )
}

export default ItemListContainer