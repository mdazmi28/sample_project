// import React from 'react';
import Auctions from '../components/Auctions';
import BeforeSPAndAcce from '../components/BeforeSPAndAcce';
import Classifieds from '../components/Classifieds';
import ShopByCategory from '../components/ShopByCategory';

const LandingPage = () => {
    return (
        <div className="container mx-auto flex flex-col gap-11">
            <ShopByCategory />
            <BeforeSPAndAcce />
            <Auctions/>
            <Classifieds/>
           
            
        </div>
    );
};


export default LandingPage;
