// import React from 'react';
const data = [
    { id: 1, name: "Women’s Corner", age: 25 },
    { id: 2, name: "Men’s Corner", age: 30 },
    { id: 3, name: "Baby Item", age: 22 },
    { id: 4, name: "Gym Equipments", age: 27 },
    { id: 5, name: "Budget Tablets", age: 35 },
    { id: 1, name: "Smart Watches", age: 25 },
    { id: 2, name: "Laptop Screens & Battery", age: 30 },
    { id: 3, name: "Printer, Cartidge, ink & Toners", age: 22 },
    { id: 4, name: "David", age: 27 },
    { id: 5, name: "Eve", age: 35 },
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
    { id: 4, name: "David", age: 27 },
    { id: 5, name: "Eve", age: 35 },
    { id: 5, name: "Eve", age: 35 }
];

const ShopByCategory = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-lato mb-10 text-[30px]">Shop By Category</h1>
            <div className="grid grid-cols-8 gap-5">
            {
                data.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="h-[112px] w-[112px] bg-gray-300 rounded"></div>
                        
                        <h1 className="text-[13px] text-black-700 break-words text-center font-lato">{item.name}</h1>
                        
                        
                    </div>
                ))
            }
        </div>
        </div>
    );
};

export default ShopByCategory;