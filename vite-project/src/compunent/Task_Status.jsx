import React, { useEffect, useState } from "react";
import Task_card from "./Task_card";

const Task_Status = ({ Id, notify, inNumber, addResolved, reId,deNumber }) => {
  const [data, SetData] = useState(null);
  const [resnt, setResnt] = useState([]);

  useEffect(() => {
    async function fun() {
      const data = await fetch("data.json");
      const res = await data.json();
      SetData(res);
    }

    fun();
  }, []);

  useEffect(() => {
    const findData = data?.find((item) => Id === item.id);
    //console.log(findData?.id);

    if (findData) {
      const filter = resnt.find((data) => findData.id == data.id);

      if (!filter) {
        setResnt([...resnt, findData]);
        notify();
        inNumber();
      } else {
        //hello
      }
    }
  }, [Id]);

  useEffect(() => {
    const filter = resnt.filter((data) => reId != data.id);

    setResnt(filter);
  }, [reId]);

  //console.log(data);

  //console.log(resnt);

  //console.log(findData);

  return (
    <div className="mb-10 w-80">
      <div className="text-2xl font-bold mb-5">Task Status</div>
      {resnt.length >= 1 ? (
        resnt.map((data) => (
          <Task_card addResolved={addResolved} data={data} deNumber={deNumber}></Task_card>
        ))
      ) : (
        <div className="text-gray-500 mt-5">
          Select a ticket to add to Task Status
        </div>
      )}
    </div>
  );
};

export default Task_Status;
