import React from 'react';
import './Men.css'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { Grid } from '@mui/material';
import { PuffLoader } from 'react-spinners';
import ItemCard from '../../components/itemCard/ItemCard';
import { fetchProducts } from '../../store/actions/ProductsAction';

const Men = () => {

    const [loader, setLoader] = useState(false)

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchProducts(setLoader))

    }, [])

    const allProducts = useSelector((Store) => Store.ProductsReducer.products)

    const menProducts = allProducts.filter(item => item.catagory == 'men')

    if(loader){
        return <div className='loading-screen'>
            <PuffLoader color="crimson" size={60}/>
        </div>
    }
    

    return (
        <div className='men-body'> 
            <div className='grid-body'>
                <Grid container spacing={6} justifyContent="center">
                    {menProducts?.map((item)=>{
                        return <Grid item>
                            <ItemCard title={item.title} description={item.description} price={item.price} />
                        </Grid>
                            
                    })}
                </Grid>
            </div>
                
        </div>
    );
};

export default Men;