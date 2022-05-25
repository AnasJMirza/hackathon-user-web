import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import Accessories from '../pages/accessories/Accessories';
import All from '../pages/all/All';
import Kids from '../pages/kids/Kids';
import Men from '../pages/men/Men';
// import Signin from '../pages/signin/SigninSide';
// import SignInSide from '../pages/signin/SigninSide';
import Women from '../pages/women/Women';
// import SigninSide from '../pages/signin/SigninSide'

const Routing = () => {
    return (
        <div>

            <BrowserRouter>
                <Header/>
                <Navbar/>
                {/* <Carousel/> */}
                {/* <Slider/> */}
                    <Routes>
                        <Route path='/' element={<All/>} />
                        <Route path='/men' element={<Men/>} />
                        <Route path='/women' element={<Women/>} />
                        <Route path='/kids' element={<Kids/>} />
                        <Route path='/accessories' element={<Accessories/>} />
                        {/* <Route path='/accessories' element={<Signin/>} /> */}
                        
                    </Routes>
            </BrowserRouter>
            
        </div>
    );
};

export default Routing;