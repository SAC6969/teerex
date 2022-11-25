import Navbar from './Navbar';
import { Cart, Product } from '../page';
import Category from './Category';
import Search from './Search';
import { getCatalogue } from '../api';
import React, { useState, useEffect } from 'react';
import { addToStore } from '../action';
import { connect } from 'react-redux';

const App = (props) => {
  // const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchItem = async () => {
      const response = await getCatalogue();
      if (response.success) {
        response.data.map(element => {
            element.qty = 1;
        });
        // setdata();
        props.dispatch(addToStore(response.data));
      }
    };
    fetchItem();
  }, []);
  
  return (
    <div className="App">
      <Navbar />
      {props.store.cartItem.showItemOfCart === false ? (
        <>
          <Search dispatch ={props.dispatch}/>
          <div className="flex-cont">
            <div className="category-container">
              <Category dispatch = {props.dispatch}/>
            </div>
            <div className="product-container">
              <Product />
            </div>
          </div>
        </>
      ) : (
        <Cart />
      )}
    </div>
  );
};

function mapStateToProps(store) {
  return {
    store,
  };
}

const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;
