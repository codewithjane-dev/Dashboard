import React from "react";
import { FaTachometerAlt } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

const SideBar = () => {
  return (
    <div className=" fixed h-screen w-16 md:w-64 py-10 bg-gray-100 border-r border-gray-700">
      <h1 className="my-4 font-bold text-2xl hidden md:block text-center">
        CWY SHOP
      </h1>
      <ul>
        <li className=" cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-300 p-4 flex items-center gap-2">
          <FaTachometerAlt />
          <span className=" hidden md:block">Dashboard</span>
        </li>
        <li className=" cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-300 p-4 flex items-center gap-2">
          <IoCartOutline />
          <span className=" hidden md:block">Orders</span>
        </li>
        <li className=" cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-300 p-4 flex items-center gap-2">
          <FaUsers />
          <span className=" hidden md:block">Customers</span>
        </li>
        <li className=" cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-300 p-4 flex items-center gap-2">
          <FaRegUser />
          <span className=" hidden md:block">Users</span>
        </li>
        <li className=" cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-300 p-4 flex items-center gap-2">
          <AiOutlineProduct />
          <span className=" hidden md:block">Products</span>
        </li>
        <li className=" cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-300 p-4 flex items-center gap-2">
          <IoSettingsOutline />
          <span className=" hidden md:block">Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
