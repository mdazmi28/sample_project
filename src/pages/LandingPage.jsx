// import React from 'react';
import Auctions from '../components/Auctions';
import BeforeSPAndAcce from '../components/BeforeSPAndAcce';
import Classifieds from '../components/Classifieds';
import HeroSection from '../components/HeroSection';
import PopularCategories from '../components/PopularCategories';
import SaleCampAndDetaisDay from '../components/SaleCampAndDetaisDay';
import ShopByCategory from '../components/ShopByCategory';

const LandingPage = () => {
    return (
        <div className="container mx-auto flex flex-col gap-11">
            <HeroSection/>
            <SaleCampAndDetaisDay/>
            <PopularCategories/>
            <ShopByCategory />
            <BeforeSPAndAcce />
            <Auctions/>
            <Classifieds/>
           
            
        </div>
    );
};


export default LandingPage;
