import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {atCart} from '../action'

const Navbar = (props) => {
  const [cart, setCart] = useState(false);
  useEffect(() => {
    props.dispatch(atCart(cart))
  }, [cart]);
  
  return (
    <div className="nav">
      <div>TeeRex Store</div>
      <div className="pages">
        <div onClick={() => setCart(false)} className={cart === false ? 'underline-small' : ''}>Products</div>
        {
          cart === false ? 
          <div onClick={() => setCart(true)} className="fa-cart">
            <i className="fa-solid fa-cart-shopping mar"></i>
            <div className='fa-cart-length'>{props.cartItem.inCart.length === 0 ? '' : props.cartItem.inCart.length }</div>
          </div>:
          <div className={cart === true ? 'underline-small' : ''}>Shopping cart</div>
        }
      </div>
    </div>
  );
};

function mapStateNavToProps(store ) {
  return {
    cartItem: store.cartItem,
  };
}

export default connect(mapStateNavToProps)(Navbar);
