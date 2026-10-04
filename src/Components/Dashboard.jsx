import React from "react";
import Card from "./Card";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { dataLine, dataBar } from "../assets/ChartData";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineController,
  BarController,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJS.register(
  LineController,
  BarController,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
);
const Dashboard = () => {
  return (
    <div className=" grow p-8 ">
      <h1 className="text-2xl mb-5"> Dashboard</h1>
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-5">
        <Card icon={<IoCartOutline />} title="Orders" value="150" />
        <Card icon={<AiOutlineProduct />} title="Products" value="300" />
        <Card icon={<FaUsers />} title="Customers" value="200" />
        <Card icon={<IoSettingsOutline />} title="Settings" value="12" />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className=" text-lg font-bold my-4">Sales Data</h3>
          <Line data={dataLine} />
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className=" text-lg font-bold my-4">Products Data</h3>
          <Bar data={dataBar} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
