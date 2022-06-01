import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import ItemCard from '../../components/itemCard/ItemCard';
import { fetchProducts } from '../../store/actions/ProductsAction';

const Men = () => {
    
    const allProducts = useSelector((Store) => Store.ProductsReducer.products)
    const menProducts = allProducts.filter(item => item.catagory == 'men')

    return (
        <div>

                {menProducts.map((item)=>{
                    return <div className='card-item'>
                        <ItemCard title={item.title} description={item.description} price={item.price} />
                        </div>
                })}
                
        </div>
    );
};

export default Men;