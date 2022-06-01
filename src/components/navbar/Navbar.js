import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div >
                <ul className='items-wrapper'>
                    <Link to={"/"} className="items" ><li>All</li></Link>
                    <Link to={"/men"} className="items"><li >Men</li></Link>
                    <Link to={"/women"} className="items"><li>Women</li></Link>
                    <Link to={"/kids"} className="items"><li >Kids</li></Link>
                    <Link to={"/accessories"} className="items"><li >Accessories</li></Link>
                
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