// import React from 'react';
import Auctions from '../components/Auctions';
import BeforeSPAndAcce from '../components/BeforeSPAndAcce';
import Classifieds from '../components/Classifieds';
import ComponentUnderNewlyArrives from '../components/ComponentUnderNewlyArrives';
import ComponentUnderNewlyArrives2 from '../components/ComponentUnderNewlyArrives2';
import Divider from '../components/Divider';
import EarlyBirdOffers from '../components/EarlyBirdOffers';
import GetAnApple from '../components/GetAnApple';
import HeroSection from '../components/HeroSection';
import MasterLayout from '../components/MasterLayout';
import NewlyArrived from '../components/NewlyArrived';
import PopularCategories from '../components/PopularCategories';
import SaleCampAndDetaisDay from '../components/SaleCampAndDetaisDay';
import ShopByCategory from '../components/ShopByCategory';
import SmartPhoneAndAcc from '../components/SmartPhoneAndAcc';
// import Timer from '../components/Timer';

const LandingPage = () => {
    return (
        <MasterLayout>
            <div className="flex flex-col gap-11 mr-[200px]">
                <HeroSection />
                <SaleCampAndDetaisDay />
                <PopularCategories />
                <Divider />
                <NewlyArrived />
                <ComponentUnderNewlyArrives />
                <ComponentUnderNewlyArrives2 />
                <EarlyBirdOffers />
                <GetAnApple />
                <ShopByCategory />
                <BeforeSPAndAcce />
                <SmartPhoneAndAcc/>
                <Auctions />
                <Classifieds />
                {/* <Timer /> */}
            </div>
        </MasterLayout>
    );
};


export default LandingPage;
