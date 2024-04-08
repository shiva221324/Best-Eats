import React from "react";
import { IoIosAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
const Cart = () => {
  return (
    <div>
      <h1 className="text-3xl ml-7 text-orange-600 text-center">My Cart</h1>
      <div className="mt-10 flex flex-col gap-3">
        <div className="max-w-[1640px] w-full shadow-xl flex gap-2">
          <img
            className="w-[100px] lg:w-[130px] rounded-lg object-cover ml-2"
            src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60"
          />
          <div className="flex flex-col mt-6">
            <h1 className="font-bold text-[1.38rem]">Double Burger</h1>
            <p className="text-grey-600 text-[1.29rem]">burger</p>
            <p>
              <span className="opacity-75 text-xl line-through">150$ </span>
              <span className="text-xl">100$</span>
            </p>
            <p className="text-2xl font-bold">
              Subtotal=
              <span className="text-2xl">200$</span>
            </p>
          </div>
          <div className="border-solid rounded-md shadow flex max-h-10 mt-8 ml-6">
            <span>
              <RiSubtractFill size={37} className="pt-[10px]" />
            </span>
            <span className="text-[1.78rem] pt-[1px]">10</span>
            <span>
              <IoIosAdd size={38} className="pt-[9px]" />
            </span>
          </div>
        </div>
        <div className="max-w-[1640px] w-full shadow-xl flex gap-2">
          <img
            className="w-[100px] lg:w-[130px] rounded-lg object-cover ml-2"
            src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60"
          />
          <div className="flex flex-col mt-6">
            <h1 className="font-bold text-[1.38rem]">Double Burger</h1>
            <p className="text-grey-600 text-[1.29rem]">burger</p>
            <p>
              <span className="opacity-75 text-xl line-through">150$ </span>
              <span className="text-xl">100$</span>
            </p>
            <p className="text-2xl font-bold">
              Subtotal=
              <span className="text-2xl">200$</span>
            </p>
          </div>
          <div className="border-solid rounded-md shadow flex max-h-10 mt-8 ml-6">
            <span>
              <RiSubtractFill size={37} className="pt-[10px]" />
            </span>
            <span className="text-[1.78rem] pt-[1px]">10</span>
            <span>
              <IoIosAdd size={38} className="pt-[9px]" />
            </span>
          </div>
        </div>
        <div className="max-w-[1640px] w-full shadow-xl flex gap-2">
          <img
            className="w-[100px] lg:w-[130px] rounded-lg object-cover ml-2"
            src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60"
          />
          <div className="flex flex-col mt-6">
            <h1 className="font-bold text-[1.38rem]">Double Burger</h1>
            <p className="text-grey-600 text-[1.29rem]">burger</p>
            <p>
              <span className="opacity-75 text-xl line-through">150$ </span>
              <span className="text-xl">100$</span>
            </p>
            <p className="text-2xl font-bold">
              Subtotal=
              <span className="text-2xl">200$</span>
            </p>
          </div>
          <div className="border-solid rounded-md shadow flex max-h-10 mt-8 ml-6">
            <span>
              <RiSubtractFill size={37} className="pt-[10px]" />
            </span>
            <span className="text-[1.78rem] pt-[1px]">10</span>
            <span>
              <IoIosAdd size={38} className="pt-[9px]" />
            </span>
          </div>
        </div>
        <div className="max-w-[1640px] w-full shadow-xl flex gap-2">
          <img
            className="w-[100px] lg:w-[130px] rounded-lg object-cover ml-2"
            src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60"
          />
          <div className="flex flex-col mt-6">
            <h1 className="font-bold text-[1.38rem]">Double Burger</h1>
            <p className="text-grey-600 text-[1.29rem]">burger</p>
            <p>
              <span className="opacity-75 text-xl line-through">150$ </span>
              <span className="text-xl">100$</span>
            </p>
            <p className="text-2xl font-bold">
              Subtotal=
              <span className="text-2xl">200$</span>
            </p>
          </div>
          <div className="border-solid rounded-md shadow flex max-h-10 mt-8 ml-6">
            <span>
              <RiSubtractFill size={37} className="pt-[10px]" />
            </span>
            <span className="text-[1.78rem] pt-[1px]">10</span>
            <span>
              <IoIosAdd size={38} className="pt-[9px]" />
            </span>
          </div>
        </div>
        <div className="max-w-[1640px] w-full shadow-xl flex gap-2">
          <img
            className="w-[100px] lg:w-[130px] rounded-lg object-cover ml-2"
            src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60"
          />
          <div className="flex flex-col mt-6">
            <h1 className="font-bold text-[1.38rem]">Double Burger</h1>
            <p className="text-grey-600 text-[1.29rem]">burger</p>
            <p>
              <span className="opacity-75 text-xl line-through">150$ </span>
              <span className="text-xl">100$</span>
            </p>
            <p className="text-2xl font-bold">
              Subtotal=
              <span className="text-2xl">200$</span>
            </p>
          </div>
          <div className="border-solid rounded-md shadow flex max-h-10 mt-8 ml-6">
            <span>
              <RiSubtractFill size={37} className="pt-[10px]" />
            </span>
            <span className="text-[1.78rem] pt-[1px]">10</span>
            <span>
              <IoIosAdd size={38} className="pt-[9px]" />
            </span>
          </div>
        </div>
        <div className="max-w-[1640px] w-full shadow-xl flex gap-2">
          <img
            className="w-[100px] lg:w-[130px] rounded-lg object-cover ml-2"
            src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60"
          />
          <div className="flex flex-col mt-6">
            <h1 className="font-bold text-[1.38rem]">Double Burger</h1>
            <p className="text-grey-600 text-[1.29rem]">burger</p>
            <p>
              <span className="opacity-75 text-xl line-through">150$ </span>
              <span className="text-xl">100$</span>
            </p>
            <p className="text-2xl font-bold">
              Subtotal=
              <span className="text-2xl">200$</span>
            </p>
          </div>
          <div className="border-solid rounded-md shadow flex max-h-10 mt-8 ml-6">
            <span>
              <RiSubtractFill size={37} className="pt-[10px]" />
            </span>
            <span className="text-[1.78rem] pt-[1px]">10</span>
            <span>
              <IoIosAdd size={38} className="pt-[9px]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
