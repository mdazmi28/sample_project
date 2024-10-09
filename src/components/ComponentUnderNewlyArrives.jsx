// import React from 'react'

const data = [1, 2, 3];

const ComponentUnderNewlyArrives = () => {
    return (
        <div className='h-[216px] w-auto rounded-lg flex justify-center gap-4'>
            {
                data.map((item, index) => (
                    <div key={index} className="h-[240px] w-[500px] bg-gray-300 flex items-center justify-center rounded-lg">
                        
                    </div>
                ))
            }
        </div>
    );
};

export default ComponentUnderNewlyArrives;
