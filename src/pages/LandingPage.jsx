// import React from 'react';
import Auctions from '../components/Auctions';
import BeforeSPAndAcce from '../components/BeforeSPAndAcce';
import Classifieds from '../components/Classifieds';
import ComponentUnderNewlyArrives from '../components/ComponentUnderNewlyArrives';
import ComponentUnderNewlyArrives2 from '../components/ComponentUnderNewlyArrives2';
import Divider from '../components/Divider';
import EarlyBirdOffers from '../components/EarlyBirdOffers';
import HeroSection from '../components/HeroSection';
import NewlyArrived from '../components/NewlyArrived';
import PopularCategories from '../components/PopularCategories';
import SaleCampAndDetaisDay from '../components/SaleCampAndDetaisDay';
import ShopByCategory from '../components/ShopByCategory';

const LandingPage = () => {
    return (
        <div className="container mx-auto flex flex-col gap-11">
            <HeroSection/>
            <SaleCampAndDetaisDay/>
            <PopularCategories/>
            <Divider/>
            <NewlyArrived/>
            <ComponentUnderNewlyArrives/>
            <ComponentUnderNewlyArrives2/>
            <EarlyBirdOffers/>
            <ShopByCategory />
            <BeforeSPAndAcce />
            <Auctions/>
            <Classifieds/>
           
            
        </div>
    );
};


export default LandingPage;
