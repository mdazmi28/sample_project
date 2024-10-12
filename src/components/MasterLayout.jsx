// import React from 'react';

import Menu from "./Menu";
import NavBar from "./NavBar";

const MasterLayout = (props) => {
    return (
        <div className="h-screen flex gap-0">
            {/* Left Section (Menu) */}
            <div className="w-[5%] h-screen">
                <div className="pl-4 z-10">
                    <Menu />
                </div>
            </div>

            {/* Right Section (Scrollable Content) */}
            <div className="w-[95%]">
                <div className="bg-[#F7F8FA] overflow-y-scroll h-screen hide-scrollbar flex flex-col -ml-[10px]">
                    <NavBar className="w-full" />
                    <div className="">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MasterLayout;
