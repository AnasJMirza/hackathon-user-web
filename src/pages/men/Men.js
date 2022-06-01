import React from 'react';
import './Men.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { Grid } from '@mui/material';
import ItemCard from '../../components/itemCard/ItemCard';
import { fetchProducts } from '../../store/actions/ProductsAction';

const Men = () => {
    
    const allProducts = useSelector((Store) => Store.ProductsReducer.products)
    const menProducts = allProducts.filter(item => item.catagory == 'men')

    return (
        <div className='men-body'> 
            <Grid container spacing={2}>
                {menProducts.map((item)=>{
                    return <Grid item>
                        <ItemCard title={item.title} description={item.description} price={item.price} />
                    </Grid>
                        
                })}
            </Grid>
                
        </div>
    );
};

export default Men;