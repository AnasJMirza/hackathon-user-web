import React, { useState } from 'react';
import './All.css'
import ItemCard from '../../components/itemCard/ItemCard';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/actions/ProductsAction';
import PropagateLoader from 'react-spinners/PropagateLoader'
import { PuffLoader } from 'react-spinners';
import MainHeader from '../../components/mainHeader/MainHeader';

const All = () => {
    
    const [loader, setLoader] = useState(false)

    const dispatch = useDispatch();

    useEffect(() => {
        console.log("All Use Effect run");

      dispatch(fetchProducts(setLoader))
        
    }, [])

    



    const allProducts = useSelector((Store) => Store.ProductsReducer.products)
    console.log("All Products from Store", allProducts);
    console.log("All Products from Store", allProducts[0]);


    if (loader) {
        return (
          <div className="loading-screen">
            
            <PuffLoader color={"crimson"}  size={60} />
          </div>
        );
      }
    
    return (
        <div>

            <MainHeader/>
            <div className='home-grid-body'>

            
            <div className='grid-body'>
              <Grid container spacing={2}>
                  {allProducts.map((item)=>{
                      return <Grid item md={3}>
                              <ItemCard title={item.title} description={item.description} price={item.price} />
                          </Grid>
                  })}
              </Grid>
            </div>

            </div>
        </div>
    );
};

export default All;