import React from "react";
import { useState, useEffect } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUser } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { IoIosSunny } from "react-icons/io";
function Navbar(props) {
  const [nav, setNav] = useState(false);
  const [del, setDel] = useState(true);
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Coffee</span>
        </h1>
        <div className="hidden md:flex md:text-[14px] lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] lg:ml-7">
          <p
            className={
              del
                ? "bg-black text-white rounded-full p-2 cursor-pointer hover:scale-105 duration-300"
                : "p-2 cursor-pointer"
            }
            onClick={() => {
              if (del === false) {
                setDel(true);
              }
            }}
          >
            Delivery
          </p>
          <p
            onClick={() => {
              if (del === true) {
                setDel(false);
              }
            }}
            className={
              del
                ? "p-2 cursor-pointer"
                : "bg-black text-white rounded-full p-2 cursor-pointer hover:105 duration-300"
            }
          >
            Pickup
          </p>
        </div>
      </div>
      {/*search */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[195px] sm:w-[357px] lg:w-[800px]">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          placeholder="Search food..."
          className="bg-transparent p-2 focus:outline-none"
        />
      </div>
      {/*cart*/}
      <button className="bg-black text-white rounded-3xl p-2  sm:flex items-center py-2 sm:rounded-full lg:mr-4">
        <BsFillCartFill size={20} className="sm:mr-1" />
        {window.innerWidth < 640 ? "" : "Cart"}
      </button>
      {/*mobile menu*/}
      {/*overlay*/}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen top-0 left-0"></div>
      ) : (
        ""
      )}
      {/*side drawer menu*/}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          size={28}
          className="absolute right-[0.9rem] top-4 cursor-pointer"
          onClick={() => setNav(!nav)}
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            {/* <li
              onClick={props.changeTheme}
              className="text-xl py-4 flex cursor-pointer"
            >
              <MdDarkMode
                size={25}
                className="mr-4"
                onClick={props.changeTheme}
              />
              Dark Mode
      </li>*/}
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" />
              Favorites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" />
              Promotions
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" />
              Best Ones
            </li>
            <li className="text-xl py-4 flex">
              <FaUser size={25} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
