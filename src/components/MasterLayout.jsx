// import React from 'react';

import Menu from "./Menu";

const MasterLayout = (props) => {
    return (
        <div className="h-screen flex">
            {/* Left */}
            <div className="w-[8%] p-4">
                
                <Menu />
            </div>
            {/* Right */}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-y-scroll flex flex-col hide-scrollbar">
                {/* <NavBar/> */}
                {props.children}
            </div>

        </div>
    );
};

export default MasterLayout;