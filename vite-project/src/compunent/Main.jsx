import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Customer_Tickets from "./Customer_Tickets";
import Task_Status from "./Task_Status";
import Resolved_Task from "./Resolved_Task";

const Main = () => {
  const [data, SetData] = useState(null);
  const [Id,SetId] = useState(null)

  useEffect(() => {
    async function fun() {
      const data = await fetch("data.json");
      const JSON = await data.json();
      SetData(JSON);
    }

    fun();
  }, []);

  const fun = (data) => {
    SetId(data)
  };

  return (
    <div className="py-15 bg-gray-100 ">
      <div>
        <Hero></Hero>
      </div>
      <div className="flex justify-between">
        <div className="m-20 mx-30">
          <div className="text-2xl font-bold mb-7 ">Customer Tickets</div>
          <div className="grid grid-cols-2 gap-5">
            {data?.map((data) => (
              <Customer_Tickets data={data} fun={fun}></Customer_Tickets>
            ))}
          </div>
        </div>
        <div className="m-20 mx-30">
          <Task_Status Id={Id}></Task_Status>
          <Resolved_Task></Resolved_Task>
        </div>
      </div>
    </div>
  );
};

export default Main;
