import React, { useEffect, useState } from "react";
import Task_card from "./Task_card";

const Task_Status = ({ Id }) => {
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
    if(findData){
        setResnt([...resnt, findData]);
    }
    //console.log(resnt);
    
  }, [Id]);

  //console.log(data);

  console.log(resnt);

  //console.log(findData);

  return (
    <div className="mb-10">
      <div className="text-2xl font-bold">Task Status</div>
      {resnt.length == 1 ? (
        resnt.map((data) => <Task_card data={data}></Task_card>)
      ) : (
        <div className="text-gray-500 mt-5">
          Select a ticket to add to Task Status
        </div>
      )}
    </div>
  );
};

export default Task_Status;
