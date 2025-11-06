import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Customer_Tickets from "./Customer_Tickets";
import Task_Status from "./Task_Status";
import Resolved_Task from "./Resolved_Task";

const Main = ({ notify }) => {
  const [data, SetData] = useState(null);
  const [Id, SetId] = useState(null);
  const [increaseNumber, setInNumber] = useState(0);

  useEffect(() => {
    async function fun() {
      const data = await fetch("data.json");
      const JSON = await data.json();
      SetData(JSON);
    }

    fun();
  }, []);

  const fun = (data) => {
    SetId(data);
  };

  const inNumber = () => {
    setInNumber(increaseNumber + 1);
  };

  return (
    <div className="py-15 bg-gray-100 ">
      <div>
        <Hero increaseNumber={increaseNumber}></Hero>
      </div>
      <div className="flex justify-between">
        <div className="m-20 mx-20">
          <div className="text-2xl font-bold mb-7 ">Customer Tickets</div>
          <div className="grid grid-cols-2 gap-5">
            {data?.map((data) => (
              <Customer_Tickets data={data} fun={fun}></Customer_Tickets>
            ))}
          </div>
        </div>
        <div className="m-20 mx-20">
          <Task_Status
            Id={Id}
            notify={notify}
            fun={fun}
            inNumber={inNumber}
          ></Task_Status>
          <Resolved_Task></Resolved_Task>
        </div>
      </div>
    </div>
  );
};

export default Main;
