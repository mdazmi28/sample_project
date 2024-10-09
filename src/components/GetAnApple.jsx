// import React from 'react';

import Timer from "./Timer";

const GetAnApple = () => {
    return (
        <div>
            <div className='w-full flex gap-4'>
                <div className="w-1/2 h-[250px] bg-gray-300"></div>
                <div className="flex flex-col">

                    <div className="ml-10 mt-10">
                    <h1 className="text-[40px] font-bold">Get an Apple</h1>
                    <h1 className="text-gray-400">Hurry up and get upto 20% discount on selected Apple Devices</h1>
                    <div>
                        <Timer/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetAnApple;