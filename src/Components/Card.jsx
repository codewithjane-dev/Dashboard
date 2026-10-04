import React from "react";

const Card = ({ icon, title, value }) => {
  return (
    <div className=" bg-white text-black p-4 rounded-lg shadow-md flex items-center gap-5">
      <div className=" text-3xl text-gray-600">{icon}</div>
      <div>
        <h1 className="text-lg font-semibold">{title}</h1>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default Card;
