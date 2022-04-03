import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CartWidget = ({numCompra})=>{
  return(
      <div className='WidgetShop'>
          <Link to="/cart" className="WidgetShop"> 
              <FaShoppingCart/>
              {numCompra}
          </Link>
      </div>
      
      
  )
} 
export default CartWidget