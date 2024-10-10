// import React from 'react';

import Menu from "./Menu";
import NavBar from "./NavBar";

const MasterLayout = (props) => {
    return (
        <div className="h-screen flex gap-0">
        {/* Left */}
        <div className="pl-4 z-10"> {/* Add relative positioning to the parent */}
            <Menu />
        </div>
        
        {/* Right */}
        <div className="bg-[#F7F8FA] overflow-y-scroll hide-scrollbar flex flex-col -ml-[10px]">
            <NavBar className="w-full" />
            <div className="">
                {props.children}
            </div>
        </div>
    </div>
    
    );
};

export default MasterLayout;