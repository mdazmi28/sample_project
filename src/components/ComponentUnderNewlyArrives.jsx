// import React from 'react'

const data = [1, 2, 3];

const ComponentUnderNewlyArrives = () => {
    return (
        <div className='container mx-[100px]'>
            <div className="flex gap-4 rounded container mx-auto h-[px]">
            {
                data.map((item, index) => (
                    <div key={index} className="h-[240px] w-[500px] bg-gray-300 flex items-center justify-center rounded-lg">
                        
                    </div>
                ))
            }
        </div>
        </div>
        
    );
};

export default ComponentUnderNewlyArrives;
