import React from 'react';
import  {addFilterInStore}  from '../action';
import { filter } from './Filter';

const Category = (props) => {
  const handleOnClick = (e,index) => {
    const filterArr = filter(e,index);
    props.dispatch(addFilterInStore(filterArr));
  }

  return (
    <div className="category-box">
      <div className="category-input">
        <h4>Color</h4>
        <input type="checkbox" name="Black" value="Black" onClick={(e)=>handleOnClick(e.target.checked,0)}/>
        <label htmlFor="Black">Black</label>
        <br></br>
        <input type="checkbox" name="Blue" value="Blue" onClick={(e)=>handleOnClick(e.target.checked,1)}/>
        <label htmlFor="Blue">Blue</label>
        <br></br>
        <input type="checkbox" name="Green" value="Green" onClick={(e)=>handleOnClick(e.target.checked,2)}/>
        <label htmlFor="Green">Green</label>
        <h4>Gender</h4>
        <input type="checkbox" name="Men" value="Men" onClick={(e)=>handleOnClick(e.target.checked,3)}/>
        <label htmlFor="Men">Men</label>
        <br></br>
        <input type="checkbox" name="Women" value="Women" onClick={(e)=>handleOnClick(e.target.checked,4)}/>
        <label htmlFor="Women">Women</label>
        <br></br>
        <h4>Price</h4>
        <input type="checkbox" name="250" value="250" onClick={(e)=>handleOnClick(e.target.checked,5)}/>
        <label htmlFor="250">0-Rs250</label>
        <br></br>
        <input type="checkbox" name="450" value="450" onClick={(e)=>handleOnClick(e.target.checked,6)}/>
        <label htmlFor="450">Rs251-450</label>
        <br></br>
        <input type="checkbox" name="451" value="451" onClick={(e)=>handleOnClick(e.target.checked,7)}/>
        <label htmlFor="451">450</label>
        <h4>Type</h4>
        <input type="checkbox" name="Polo" value="Polo" onClick={(e)=>handleOnClick(e.target.checked,8)}/>
        <label htmlFor="Polo">Polo</label>
        <br></br>
        <input type="checkbox" name="Hoodie" value="Hoodie" onClick={(e)=>handleOnClick(e.target.checked,9)}/>
        <label htmlFor="Hoodie">Hoodie</label>
        <br></br>
        <input type="checkbox" name="Basic" value="Basic" onClick={(e)=>handleOnClick(e.target.checked,10)}/>
        <label htmlFor="Basic">Basic</label>
      </div>
    </div>
  );
};

export default Category;
