import React, { useState } from "react";
import { data } from "../Data.js";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Food = () => {
  const [foods, setFoods] = useState(data);
  //Filter by type
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };
  //Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/*Filter*/}
      <div className="flex flex-col lg:flex-row justify-between">
        {/*filter type*/}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Chicken
            </button>
          </div>
        </div>
        {/*filter price*/}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("10$")}
              className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              10$
            </button>
            <button
              onClick={() => filterPrice("25$")}
              className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              25$
            </button>
            <button
              onClick={() => filterPrice("50$")}
              className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              50$
            </button>
            <button
              onClick={() => filterPrice("100$")}
              className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              100$
            </button>
          </div>
        </div>
      </div>
      {/*display foods*/}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 items-baseline">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
            <div className="flex justify-between">
              <button className="relative bottom-0 w-50 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 ml-2">
                Add to Cart
              </button>
              <div className="md:mr-2 lg:mr-3 sm:mr-1">
                <CiHeart size={40} className="text-red-600 cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
