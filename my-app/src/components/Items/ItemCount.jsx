import { useState, useEffect } from 'react'
import React, { Component } from 'react';

const ItemCount = ({ min, stock, onAdd }) => {
  const [cantidad, setCantidad] = useState(min);

  const upCantidad = () => {
    cantidad < stock ? setCantidad(cantidad + 1) : alert("Stock Insuficiente");
  };

  const downCantidad = () => {
    cantidad > min ? setCantidad(cantidad - 1) : alert("Mínimo de Compra");
  };

  const agregar = () => {
    onAdd( cantidad )
};


  return (
    <>
      <div>
        Cantidad
        <div>
          {cantidad}
        </div>
        <div>
          <button onClick={upCantidad}>Aumentar</button>
          <button onClick={downCantidad}>Decrementar</button>
          <button onClick={ agregar }>Agregar al carrito</button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;

