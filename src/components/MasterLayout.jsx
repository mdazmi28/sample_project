// import React from 'react';

import Menu from "./Menu";
import NavBar from "./NavBar";

const MasterLayout = (props) => {
    return (
        <div className="h-screen flex">
            {/* Left Section (Menu) */}
            <div className="w-[5%] h-screen fixed z-10"> {/* Fixed positioning to keep the Menu on top */}
                <div className="pl-4">
                    <Menu />
                </div>
            </div>

            {/* Right Section (Scrollable Content) */}
            <div className="ml-[5%] w-[95%]"> {/* Add margin to prevent overlap with the fixed menu */}
                <div className="bg-[#F7F8FA] overflow-y-scroll h-screen hide-scrollbar flex flex-col">
                    <NavBar className="w-full" />
                    <div className="p-4">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MasterLayout;

