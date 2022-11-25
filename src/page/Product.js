import ProductCard from './ProductCard';
import { connect } from 'react-redux';
import { useState,useEffect } from 'react';
import { filtersProduct, filterByText } from '../components/Filter';
const Product = (props) => {
  const products = props.stores;
  const filterStore = props.filterStore;
  const searchStore = props.searchStore;

  const [product, setProduct] = useState(products);
  useEffect(() => {
    if(searchStore.length > 0){
      let filterTextArr = filterByText(products,searchStore);
      setProduct(filterTextArr.length === 0 ? products : filterTextArr);
    }else if(filterStore.length === 0){
      setProduct(products);
    }else{
      let filteredList = filtersProduct(products,filterStore);
      setProduct(filteredList);
    }
  }, [props]);

  return product.map((item) => (
    <ProductCard item={item} dispatch={props.dispatch}  key={item.id}/>
  ));
};

function mapStateToProps({ storeItem }) {
  return {
    stores: storeItem.stores,
    filterStore: storeItem.filterStore,
    searchStore: storeItem.searchStore
  };
}

export default connect(mapStateToProps)(Product);
