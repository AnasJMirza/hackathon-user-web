import React from 'react';
import './Women.css'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/actions/ProductsAction';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { PuffLoader } from 'react-spinners';
import ItemCard from '../../components/itemCard/ItemCard';

const Women = () => {

    const [loader, setLoader] = useState(false)

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchProducts(setLoader))

    }, [])

    const allProducts = useSelector((Store) => Store.ProductsReducer.products)

    const womenProducts = allProducts.filter(item => item.catagory == 'women')

    if(loader){
        return <div className='loading-screen'>
            <PuffLoader color="crimson" size={60}/>
        </div>
    }


    return (
        <div className='women-body'>
            <div className='grid-body'>
                <Grid container spacing={2}>
                    {womenProducts?.map((item)=>{
                        return <Grid item md={3}>
                            <ItemCard title={item.title} description={item.description} price={item.price} />
                        </Grid>
                            
                    })}
                </Grid>
            </div>
        </div>
    );
};

export default Women;