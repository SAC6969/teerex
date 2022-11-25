import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addedIncart, decreaseQty, increaseQty } from '../action';

const ProductCard = (props) => {
  const handleAddTocart = (e, item) => {
    props.dispatch(addedIncart(item));
  };

  const handleDecrease = (i) => {
    props.dispatch(decreaseQty(i));
  };

  const handleIncraese = (i) => {
    if(i.qty === i.quantity){
      (function myFunction() {
        var x = document.getElementById("toast");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      })()
    }
    props.dispatch(increaseQty(i));
  };

  const i = props.item;
  return  (
    <div className="product">
      <div
        className="product-img"
        style={{ boxShadow: '0px 0px 12px 1px #E8E9E9' }}
      >
        <div className="product-name">{i.name}</div>
        <img
          alt=""
          src={i.imageURL}
          style={{ padding: '6px', height: '100%', width: '100%' }}
        />
      </div>
      <div className="price-cart">
        <div>{`Rs ${i.price}`}</div>
        {props.inCart.find((it) => it.id === i.id) ? (
          <div className="cart-qty">
            <button onClick={() => handleDecrease(i)}>
              <i className="fa-solid fa-minus"></i>
            </button>
            <div className="qty" style={{ color: 'white' }}>
              {i.qty}
            </div>
            <div id="toast">{`Only that much item in stock`}</div>
            <button onClick={() => handleIncraese(i)}>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        ) : (
          <button onClick={(e) => handleAddTocart(e, i)}>
            Add to cart
          </button>
        )}
      </div>
    </div>
    )
}

function mapStateToProps(store) {
  return {
    inCart: store.cartItem.inCart,
  };
}

export default connect(mapStateToProps)(ProductCard);
