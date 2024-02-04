import React from "react";
import { categories } from "../Data";
const Category = () => {
  return (
    <div className="max-w-[1640px] px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Items
      </h1>
      {/*Categories*/}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg flex justify-between items-center hover:scale-105 duration-300"
          >
            <h2 className="font-bold sm:text-xl">{item.name}</h2>
            <img src={item.image} alt={item.name} className="w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
