


const data = [
    { id: 1, name: "Summer Sales", des: "Only 3 days left" },
    { id: 2, name: "Buy 1 Get 1", des: "56 : 22 : 08 : 23" },
    { id: 3, name: "Welcome Home Furnit… ", des: "Only 7 days left" },
];

const viewAllDetailsData = [
    { id: 1, name: "Headphones", des: "From $0.99" },
    { id: 2, name: "Women Tops", des: "Upto 40% discount" },
    { id: 3, name: "Kid’s bicycle (girls) & accessories", des: "Upto 60% discount" },
    { id: 3, name: "Kid’s bicycle (girls) & accessories", des: "Upto 60% discount" },
    { id: 3, name: "Kid’s bicycle (girls) & accessories", des: "Upto 60% discount" },
    { id: 3, name: "Kid’s bicycle (girls) & accessories", des: "Upto 60% discount" },
    { id: 3, name: "Kid’s bicycle (girls) & accessories", des: "Upto 60% discount" },
];

const SaleCampAndDetaisDay = () => {
    return (
        <div className="flex w-full h-[310px] gap-5">
            {/* Left */}
            <div className=" flex flex-col w-1/2 bg-[#ffd8cbe7] px-3 pt-3 gap-4">
                <div className="flex justify-between">
                    <h1 className="font-bold text-[20px] text-black">Sale Campaigns</h1>
                    <h1 className="text-black hover:text-blue-400 hover:underline">All Campaigns</h1>
                </div>
                <div className="flex gap-4 justify-center items-center">
                    {
                        data.map((item, index) => (
                            <div key={index} className="flex flex-col gap-2">
                                <div className="w-[200px] h-[160px] rounded-md bg-gray-300"></div>
                                <h1>{item.name}</h1>
                                <h1>{item.des}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* Rigjt */}
            <div className="w-1/2 flex">
                <div className="w-1/2 px-3 pt-3 gap-4">
                    <div className="flex gap-4">
                        <div>
                            <h1 className="font-bold text-[20px] text-black">Deals of the Day</h1>
                            <div className="flex gap-4">
                                <div className="w-[192px] h-[220px] bg-gray-300"></div>
                                <div className="w-[200px] h-[220px] pl-4 flex flex-col gap-3">
                                    <div className="w-[114px] h-[40px] rounded-[22px] bg-yellow-300 flex justify-center items-center font-bold cursor-pointer">Top Deals</div>
                                    <div className="font-bold text-[17px]">Smartphones</div>
                                    <div className="font-[13px]">Samsung, Oneplus, Nokia, Motorola & more</div>
                                    <div className="mt-6 font-bold text-[13px] font-lato">Under $200.00</div>
                                    <div className="font-bold text-[13px] font-lato">Free Gifts</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 px-3 pt-3 gap-4 flex flex-col">
                    <div className='flex flex-col justify-end items-end'>
                        <h1 className='hover:text-blue-400 hover:underline'>View All Details</h1>
                        <div className='w-[300px] h-[220px] hide-scrollbar overflow-y-auto flex flex-col gap-3 pl-3'>
                           {
                                viewAllDetailsData.map((item,index)=>(
                                    <div key={index} className='flex gap-4'>
                                    <div className='w-[64px] h-[64px] bg-gray-300'></div>
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
    );
};

export default SaleCampAndDetaisDay;