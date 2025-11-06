import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Customer_Tickets from "./Customer_Tickets";
import Task_Status from "./Task_Status";
import Resolved_Task from "./Resolved_Task";

const Main = ({ notify, notify_error, notify_error_2 }) => {
  const [data, SetData] = useState(null);
  const [Id, SetId] = useState(null);
  const [reId, setReId] = useState(null);
  const [increaseNumber, setInNumber] = useState(0);
  const [decreaseNumber, setDeNumber] = useState(0);

  useEffect(() => {
    async function fun() {
      const data = await fetch("data.json");
      const JSON = await data.json();
      SetData(JSON);
    }

    fun();
  }, []);

  const fun = (data) => {
    if (data == Id) {
      notify_error_2();
    } else {
      SetId(data);
    }
  };

  const deNumber = () => {
    setDeNumber(decreaseNumber + 1);
    setInNumber(increaseNumber - 1);
  };

  const inNumber = () => {
    setInNumber(increaseNumber + 1);
  };

  const addResolved = (id) => {
    setReId(id);
    deNumber();
    const filter = data.filter((data) => id != data.id);
    SetData(filter);
  };

  return (
    <div className="py-15 bg-gray-100 ">
      <div>
        <Hero
          increaseNumber={increaseNumber}
          decreaseNumber={decreaseNumber}
        ></Hero>
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
            addResolved={addResolved}
            reId={reId}
            notify_error={notify_error}
          ></Task_Status>
          <Resolved_Task reId={reId}></Resolved_Task>
        </div>
      </div>
    </div>
  );
};

export default Main;
