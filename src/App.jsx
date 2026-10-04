import React from "react";
import SideBar from "./Components/SideBar";
import NavBar from "./Components/NavBar";
import Dashboard from "./Components/Dashboard";

const App = () => {
  return (
    <div className=" ">
      <SideBar />
      <div className=" grow ml-16 md:ml-64  h-full lg:h-screen">
        <NavBar />
        <div className="bg-gray-100 h-screen">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default App;
