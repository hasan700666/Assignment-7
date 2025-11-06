//import React, { useState } from "react";
// import { FaRegCircle } from "react-icons/fa";

const Customer_Tickets = ({ data,fun }) => {
  //console.log(data);

  //const [status,SetState] = useState(null)

  // const fun = () => {
    
  // };

  return (
    <div className="bg-white p-5 w-[30vw] rounded-2xl">
      <div onClick={()=>fun(data.id)}>
        <div className="flex justify-between">
          <div className="font-bold text-xl">{data.title}</div>
          <div className="bg-green-200 py-1 px-3 rounded-2xl flex items-center text-xs">
            <div className="rounded-full bg-green-600 px-1.5 mr-2 text-green-600">
              h
            </div>
            <div>{data.status}</div>
          </div>
        </div>
        <div className="text-gray-500 py-3">{data.description}</div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-gray-500">{data.id}</div>
            <div>{data.priority}</div>
          </div>
          <div className="flex items-center gap-3 text-gray-500">
            <div>{data.customer}</div>
            <div>{data.createdAt}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer_Tickets;
