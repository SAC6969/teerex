import React from 'react';
import { useState, useEffect } from 'react';
import { addFilterInStoreByText } from '../action';

const Search = (props) => {
  const [search, setSearch] = useState('');
  useEffect(() => {
    // if(search.length > 0){
      props.dispatch(addFilterInStoreByText(search));
    // }
  }, [search]);

  
  const handleShowFilterContainer = () => {
    let x = document.querySelector('.category-box');    
    let y = document.querySelector('.filter');
    if(x.style.display === 'none'){
      x.style.display = 'block';
    }else{
      x.style.display = 'none';
    }
  }

  return (
    <div className="search-container">
      <form>
        <input
          type="text"
          className="search-div"
          name="search"
          value={search}
          placeholder="Search for products..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <i className="fa-solid fa-magnifying-glass glass"></i>
        <i className="fa-solid fa-filter glass filter" onClick={handleShowFilterContainer}></i>
      </form>
    </div>
  );
};

export default Search;

// Name
// Colour
// Type
// Eg. green polo

// color: "Black"
// currency: "INR"
// gender: "Men"
// id: 1
// imageURL: "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png"
// name: "Black Polo"
// price: 250
// quantity: 3
// type: "Polo"
