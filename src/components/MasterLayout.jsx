// import React from 'react';

import Menu from "./Menu";

const MasterLayout = (props) => {
    return (
        <div className="h-screen flex gap-0">
            {/* Left */}
            <div className="pl-4">
                <Menu />
            </div>
            {/* Right */}
            <div className="bg-[#F7F8FA] overflow-y-scroll flex flex-col hide-scrollbar -mx-[10px]">
                {/* <NavBar/> */}
                {props.children}
            </div>

        </div>
    );
};

export default MasterLayout;