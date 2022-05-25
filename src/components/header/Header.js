import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

// importing iconns from MUI

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Button from '@mui/material/Button';

const Header = () => {
    return (
        <div>
            <div className='header-body'>
                <div className='logo'>
                    <ShoppingBagIcon/>
                    <div>AJM Store</div>
                </div>

                <div className='search-bar-wrapper'>
                    <input type="text"  className='search-bar' placeholder='Search Products'/>
                </div>

                <div className='header-icons'>
                    <div className='cart-icon'>
                        <ShoppingCartIcon/>
                    </div>

                    <div>
                        <Button size="small" variant='contained' 
                        style={{
                            // borderRadius: 35,
                            backgroundColor: "white",
                            // padding: "18px 36px",
                            // fontSize: "18px"
                            color:"crimson"
                        }}
                        >Sign up</Button>
                    </div>
                    
                    <Link to="/signin">
                        <Button size="small" variant='contained' 
                        style={{
                            // borderRadius: 35,
                            backgroundColor: "white",
                            // padding: "18px 36px",
                            // fontSize: "18px"
                            color:"crimson"
                        }}
                        >Sign in</Button>

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;