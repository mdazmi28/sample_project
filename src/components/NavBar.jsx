// import React from 'react';

const NavBar = () => {
    return (
        <div>
            <div className="h-[117px] bg-[#06072C] rounded">
                <div className="flex flex-col gap-4">
                    {/* Top */}
                    <div className="grid grid-cols-5 pt-5">
                        {/* Logo */}
                        <div className="">
                            <div className="flex justify-center items-center h-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="132" height="32" viewBox="0 0 132 32">
                                    <g id="Group_30177" data-name="Group 30177" transform="translate(-252 -22)">
                                        <text id="The" transform="translate(284 48)" fill="#afafaf" font-size="24" font-family="SegoeUI-Bold, Segoe UI" font-weight="700"><tspan x="0" y="0">The</tspan></text>
                                        <text id="Shop" transform="translate(326 48)" fill="#ffcc01" font-size="24" font-family="SegoeUI-Bold, Segoe UI" font-weight="700"><tspan x="0" y="0">Shop</tspan></text>
                                        <g id="Group_30175" data-name="Group 30175" transform="translate(252 22)">
                                            <g id="Group_30170" data-name="Group 30170">
                                                <path id="Path_29435" data-name="Path 29435" d="M0,8,12,0V16Z" fill="#dbdbdb" />
                                                <path id="Path_29436" data-name="Path 29436" d="M12,8,0,0V16Z" transform="translate(12)" fill="#afafaf" />
                                                <path id="Path_29433" data-name="Path 29433" d="M0,0,12,8V24L0,16Z" transform="translate(0 8)" fill="#797979" />
                                                <path id="Path_29434" data-name="Path 29434" d="M0,8,12,0V16L0,24Z" transform="translate(12 8)" fill="#ffcc01" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>

                        {/* Search Box */}
                        <div className="col-span-2">
                            <div className="w-full h-10 bg-gray-300 rounded-full">
                                <div className="grid grid-cols-4">
                                    <div className="flex items-center">
                                        <div className="flex gap-4 justify-end w-full ">
                                            <h1 className="text-[13px] text-gray-500">All Products</h1>
                                            <img  src="images/dropdown.png" className="h-[20px] w-[20px] mt-0" />
                                        </div>
                                    </div>
                                    <div className="col-span-3 h-10 flex items-center">
                                        <div className="flex justify-end w-full ">
                                            <img src="images/search.png" className="h-[20px] w-[20px] mr-5" />
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>

                        {/* Contact */}
                        <div>
                            <div className="flex gap-4 ml-4">
                                <div className="">
                                    <h1 className="text-yellow-300 text-[13px] font-bold">+01 112 352 566</h1>
                                    <h1 className="text-gray-300 text-[12px]">Track Order</h1>
                                </div>
                                <div className="">
                                    <div className="flex gap-1">
                                        <h1 className="text-yellow-300 text-[13px] font-bold">EN/USD</h1>
                                        <img src="images/dropdown.png" className="h-[20px] w-[20px] mt-0 text-white" />

                                    </div>

                                    <h1 className="text-gray-300 text-[12px]">Seller Center</h1>
                                </div>


                            </div>
                        </div>
                        <div>1</div>

                    </div>
                    {/* Bottom */}

                </div>

            </div>

        </div>
    );
};

export default NavBar;