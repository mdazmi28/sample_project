const data = [
    { id: 1, name: "Summer Sales", des: "Only 3 days left" },
    { id: 2, name: "Buy 1 Get 1", des: "56 : 22 : 08 : 23" },
    { id: 2, name: "Buy 1 Get 1", des: "56 : 22 : 08 : 23" },

];

const viewAllDetailsData = [
    { id: 1, name: "Headphones", des: "From $0.99" },
    { id: 1, name: "Headphones", des: "From $0.99" },
    { id: 1, name: "Headphones", des: "From $0.99" },
    { id: 1, name: "Headphones", des: "From $0.99" },
    { id: 1, name: "Headphones", des: "From $0.99" },
    { id: 1, name: "Headphones", des: "From $0.99" },
    { id: 1, name: "Headphones", des: "From $0.99" },
    { id: 1, name: "Headphones", des: "From $0.99" },
    { id: 1, name: "Headphones", des: "From $0.99" },
    { id: 1, name: "Headphones", des: "From $0.99" },

    // Additional items...
];

const SaleCampAndDetaisDay = () => {
    return (
        <div className='container mx-[100px]'>
            <div className=" flex h-[250px] gap-4">
                {/* Left */}
                <div className="w-1/2  bg-[#ffd8cbe7]">
                    <div className="flex flex-col gap-4">
                        {/* top */}
                        <div className="flex justify-between">
                            <h1 className="font-bold text-[20px] text-black">Sale Campaigns</h1>
                            <h1 className="text-black hover:text-blue-400 hover:underline">All Campaigns</h1>
                        </div>
                        {/* bottom */}
                        <div className="flex gap-10 justify-center items-center">
                            {
                                data.map((item, index) => (
                                    <div key={index} className="flex flex-col gap-2">
                                        <div className="w-[120px] h-[120px] rounded-md bg-gray-300"></div>
                                        <h1>{item.name}</h1>
                                        <h1>{item.des}</h1>
                                    </div>
                                ))
                            }
                        </div>

                    </div>

                </div>
                {/* Right */}
                <div className="w-1/2 ">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between">
                            <h1 className="font-bold text-[20px] text-black">Deals of the Day</h1>
                            <h1 className=" hover:text-blue-400 hover:underline text-blue-400">View All Deals</h1>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-2/3">
                            <div>
                                <div className="flex gap-4">
                                    <div className="w-[138px] h-[150px] bg-gray-300"></div>
                                    <div className="w-[200px] h-[220px] pl-4 flex flex-col gap-1">
                                        <div className="w-[114px] h-[40px] rounded-[22px] bg-yellow-300 flex justify-center items-center font-bold cursor-pointer">Top Deals</div>
                                        <div className="font-bold text-[17px]">Smartphones</div>
                                        <div className="font-[13px]">Samsung, Oneplus, Nokia, Motorola & more</div>
                                        <div className="mt-6 font-bold text-[13px] font-lato">Under $200.00</div>
                                        <div className="font-bold text-[13px] font-lato">Free Gifts</div>
                                    </div>
                                </div>

                            </div>
                            </div>
                            <div className="w-1/3">
                            <div className='h-[180px] hide-scrollbar overflow-y-auto flex flex-col gap-3'>
                           {
                                viewAllDetailsData.map((item,index)=>(
                                    <div key={index} className='flex gap-4'>
                                    <div className='w-[50px] h-[50px] bg-gray-300'></div>
                                    <div className='flex flex-col'>
                                        <h1>{item.name}</h1>
                                        <h1>{item.des}</h1>
                                    </div>
                                </div>

                                ))
                            }
                        </div>

                            </div>
                            

                        </div>

                    </div>
                </div>
            </div>

        </div>

    );
};

export default SaleCampAndDetaisDay;
