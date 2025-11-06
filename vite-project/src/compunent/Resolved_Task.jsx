import React, { useEffect, useState } from "react";
import Resolved_card from "./Resolved_card";

const Resolved_Task = ({ reId}) => {
  const [data, SetData] = useState([]);
  const [id, setId] = useState([]);

  useEffect(() => {
    if (reId == null) {
      return;
    }

    setId([...id, reId]);
    //console.log(id);
    //console.log(reId);
  }, [reId]);

  //console.log(reId);
  //console.log(id);

  useEffect(() => {
    if (reId == null) {
      return;
    }
    async function fun() {
      const Featchdata = await fetch("data.json");
      const res = await Featchdata.json();
      const filter = res.find((data) => reId == data.id);
      //console.log(filter);
      
      SetData([...data, filter]);
    }

    fun();
  }, [reId]);

  //console.log(data);

  return (
    <div className="mb-10 w-80">
      <div className="text-2xl font-bold mb-5">Resolved Task</div>
      {data?.length >= 1 ? (
        data?.map((data) => <Resolved_card data={data}></Resolved_card>)
      ) : (
        <div className="text-gray-500 mt-5">
          Select a ticket to add to Task Status
        </div>
      )}
    </div>
  );
};

export default Resolved_Task;
