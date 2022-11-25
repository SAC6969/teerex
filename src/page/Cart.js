import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../action';
import { increaseQty } from '../action';
import { useState,useEffect } from 'react';
const Cart = (props) => {
  
  const [total, setTotal] = useState(0);
  const product = props.cartItem.inCart;
  const stores = props.stores;

  const handleDeleteItem = (item) => {
    const newArr = product.filter((i) => i !== item);
    const idx = product.findIndex((i) => i === item);
    stores[idx].qty = 1;
    props.dispatch(removeFromCart(newArr));
  };

  const handleIncraese = (i) => {

    props.dispatch(increaseQty(i));
  };

  useEffect(() => {
    let total = 0;
    product.map((i)=> total += i.price*i.qty);
    setTotal(total);
  }, [product]);

  if(product.length === 0){
    return (
      <h2 style={{textAlign:'center'}}>No item added in cart</h2>
    )
  }

  return (
    <div className="cart-container">
      <p className="title">Shopping Cart</p>
      <div className="alignment">
        {product.map((item) => (
          <div className="item-container" key={`cart-${item.id}`}>
            <div className="item-name-img">
              <div className="cart-img-container">
                <img src={item.imageURL} alt="item-icon" />
              </div>
              <div className="item-name">
                <div>{item.name}</div>
                <div>{item.price}</div>
              </div>
            </div>
            <div className="item-del-ty">
              <div className="item-qty">Qty:{item.qty}
                <button className='cart-plus' onClick={() => handleIncraese(item)}>
                <i className="fa-solid fa-plus"></i>
                </button>
              </div>
              <button
                className="delete-btn"
                onClick={() => handleDeleteItem(item)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        <div className='total-value'>
          Total amount : {total}
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(store) {
  return {
    stores: store.storeItem.stores,
    cartItem : store.cartItem,
  };
}

const connectedAppComponent = connect(mapStateToProps)(Cart);
export default connectedAppComponent;
