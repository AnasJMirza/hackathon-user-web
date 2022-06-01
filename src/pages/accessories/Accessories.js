import React from 'react';
import './Accessories.css'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/actions/ProductsAction';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import {PuffLoader} from 'react-spinners'
import ItemCard from '../../components/itemCard/ItemCard';

const Accessories = () => {

    const [loader, setLoader] = useState(false)

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchProducts(setLoader))

    }, [])

    const allProducts = useSelector((Store) => Store.ProductsReducer.products)

    const accessoriesProducts = allProducts.filter(item => item.catagory == 'accessories')

    if(loader){
        return <div className='loading-screen'>
            <PuffLoader color="crimson" size={60} />
        </div>
    }


    return (
        <div>
            <div className='grid-body'>
                <Grid container spacing={6} justifyContent="center">
                    {accessoriesProducts?.map((item)=>{
                        return <Grid item>
                            <ItemCard title={item.title} description={item.description} price={item.price} />
                        </Grid>
                            
                    })}
                </Grid>
            </div>
        </div>
    );
};

export default Accessories;