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
                {/* The grid in which all, the products will be shown */}
                <Grid container spacing={2}>
                    {accessoriesProducts?.map((item)=>{
                        return <Grid item md={3}>
                            <ItemCard title={item.title} description={item.description} price={item.price} imgURL={item.url}/>
                        </Grid>
                            
                    })}
                </Grid>
            </div>
        </div>
    );
};

export default Accessories;