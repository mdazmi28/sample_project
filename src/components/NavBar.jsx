// import React from 'react';

const NavBar = () => {
    return (
        <div className="w-full">
            <div className="h-[110px] bg-[#06072C]">
                <div className="flex flex-col gap-4">
                    {/* Top */}
                    <div className="grid grid-cols-5 pt-5">
                        {/* Image */}
                        <div className="flex justify-center items-center">
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
                        {/* Search Box */}
                        <div className="col-span-2">
                            <div className="w-full h-10 bg-gray-300 rounded-full">
                                <div className="grid grid-cols-4">
                                    <div className="flex items-center">
                                        <div className="flex gap-4 justify-end w-full ">
                                            <h1 className="text-[13px] text-gray-500">All Products</h1>
                                            <img src="images/dropdown.png" className="h-[20px] w-[20px] mt-0" />
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
                            <div className="flex gap-2 ml-[50px]">
                                <div className="">
                                    <h1 className="text-yellow-300 text-[13px] font-bold">+01 112 352 566</h1>
                                    <h1 className="text-gray-300 text-[12px]">Track Order</h1>
                                </div>
                                <div className="">
                                    <div className="flex gap-4 items-center">
                                        <div>
                                            <h1 className="text-yellow-300 text-[13px] font-bold">EN/USD</h1>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6.104" viewBox="0 0 10 6.104">
                                                <path id="_29fccd8d91811ccf56a40c54ba6c4ab3" data-name="29fccd8d91811ccf56a40c54ba6c4ab3" d="M4.011,1039.215a.833.833,0,0,1,1.41-.625l4.422,4.156a.833.833,0,0,1,0,1.214l-4.422,4.156a.833.833,0,1,1-1.14-1.213l3.777-3.549L4.281,1039.8A.832.832,0,0,1,4.011,1039.215Z" transform="translate(1048.357 -4.002) rotate(90)" fill="#929292" fill-rule="evenodd" />
                                            </svg>
                                        </div>

                                    </div>
                                    <h1 className="text-gray-300 text-[12px]">Seller Center</h1>
                                </div>
                            </div>
                        </div>
                        {/* Log In and Reg */}
                        <div>
                            <div className="flex gap-4 ml-10">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                        <rect id="Rectangle_18381" data-name="Rectangle 18381" width="32" height="32" rx="16" fill="#797979" />
                                        <g id="Page-1" transform="translate(7.999 8.005)">
                                            <g id="Dribbble-Light-Preview" transform="translate(0 -0.005)">
                                                <g id="icons">
                                                    <path id="profile-_1335_" data-name="profile-[#1335]" d="M372,2007a3.2,3.2,0,1,1,3.2-3.2,3.2,3.2,0,0,1-3.2,3.2m3.006.538a4.8,4.8,0,1,0-6.011,0A7.693,7.693,0,0,0,364,2015h1.6a6.4,6.4,0,0,1,12.8,0H380a7.694,7.694,0,0,0-4.992-7.46" transform="translate(-364 -1998.995)" fill="#ffcc01" fill-rule="evenodd" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div className="">
                                    <h1 className="text-yellow-300 text-[13px] font-bold">Login or Register</h1>
                                    <h1 className="text-gray-300 text-[12px]">Customer Zone</h1>
                                </div>
                            </div>
                        </div>


                    </div>
                    {/* Bottom */}
                    <div className="h-[30px]">
                        <div className="grid grid-cols-3">
                            {/* Left */}
                            <div className="col-span-2">
                                <div className="flex gap-[15px] pl-[55px]">
                                    <div className="text-white font-bold flex gap-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                            <g id="CATEGORIES" transform="translate(-3 -3)">
                                                <circle id="Ellipse_670" data-name="Ellipse 670" cx="3.556" cy="3.556" r="3.556" transform="translate(3 3)" fill="#ffcc01" />
                                                <circle id="Ellipse_671" data-name="Ellipse 671" cx="3.556" cy="3.556" r="3.556" transform="translate(3 11.889)" fill="#ffcc01" />
                                                <circle id="Ellipse_672" data-name="Ellipse 672" cx="3.556" cy="3.556" r="3.556" transform="translate(11.889 3)" fill="#ffcc01" />
                                                <circle id="Ellipse_673" data-name="Ellipse 673" cx="3.556" cy="3.556" r="3.556" transform="translate(11.889 11.889)" fill="#ffcc01" />
                                            </g>
                                        </svg>
                                        <h1>All Categories</h1>
                                    </div>
                                    <div className="text-white">|</div>
                                    <div className="text-yellow-300 font-bold tex-[13px]">Home</div>
                                    <div className="text-yellow-300 font-bold tex-[13px]">Coupon</div>
                                    <div className="text-yellow-300 font-bold tex-[13px]">All Shops</div>
                                    <div className="text-yellow-300 font-bold tex-[13px]">Brands</div>
                                    <div className="text-yellow-300 font-bold tex-[13px]">Summer Sale</div>
                                    <div className="text-yellow-300 font-bold tex-[13px]">Computer Accessories</div>
                                    <div className="text-yellow-300 font-bold tex-[13px]">More</div>

                                </div>
                            </div>
                            {/* Right */}
                            <div className="pr-[70px]">
                                <div className="flex items-center justify-center gap-9">
                                    <div>
                                        <h1 className="text-gray-300 text-[13px]">Compare (17)</h1>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="13.598" viewBox="0 0 16 13.598">
                                            <g id="Layer_2" data-name="Layer 2" transform="translate(-1.999 -4)">
                                                <path id="heart" d="M10,17.6a.8.8,0,0,1-.568-.232L3.216,11.143A4.186,4.186,0,1,1,9.135,5.224L10,6.088l.864-.864a4.186,4.186,0,1,1,5.919,5.919l-6.215,6.223A.8.8,0,0,1,10,17.6Z" transform="translate(0)" fill="#ffcc01" />
                                            </g>
                                        </svg>
                                        </div>
                                        <div><h1 className="text-yellow-300 text-[13px]">Wishlist (17)</h1></div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14.4" viewBox="0 0 16 14.4">
                                                <path id="_75dcfce61b8c5e4b1f5cf9fe9a41e4c6" data-name="75dcfce61b8c5e4b1f5cf9fe9a41e4c6" d="M11.951,0A4.045,4.045,0,0,1,16,4.04h0v6.32a4.046,4.046,0,0,1-4.049,4.04h-7.9A4.045,4.045,0,0,1,0,10.36H0V4.04A4.04,4.04,0,0,1,4.048,0h7.9Zm.9,4.16a.608.608,0,0,0-.449.16h0L8.8,7.2a1.253,1.253,0,0,1-1.6,0h0L3.6,4.32a.612.612,0,0,0-.857.856h0l.1.1,3.64,2.84a2.519,2.519,0,0,0,3.127,0h0l3.609-2.888.064-.064a.619.619,0,0,0-.009-.8A.673.673,0,0,0,12.856,4.16Z" fill="#ffcc01" />
                                            </svg>

                                        </div>
                                        <div><h1 className="text-yellow-300 text-[13px]">Notifications</h1></div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>



            </div>


        </div>
    );
};

export default NavBar;