import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Navbar = () => {
    return (
        <div>
            <div >
                <ul className='items-wrapper'>
                    <Link to={"/"} className="link" ><li className='items'>All</li></Link>
                    <Link to={"/men"} className="link"><li className='items'>Men</li></Link>
                    <Link to={"/women"} className="link"><li className='items'>Women</li></Link>
                    <Link to={"/kids"} className="link"><li className='items'>Kids</li></Link>
                    <Link to={"/accessories"} className="link"><li className='items'>Accessories</li></Link>
                    {/* <li className='items'>Men</li>
                    <li className='items'>Women</li>
                    <li className='items'>Kids</li>
                    <li className='items'>Accessories</li> */}
                </ul>

                
            </div>

            
        </div>
    );
};

export default Navbar;