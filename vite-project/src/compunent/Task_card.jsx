import React from "react";

const Task_card = ({ data, addResolved }) => {
  //console.log(data);

  return (
    <div className="bg-white p-5 mb-5 rounded-2xl">
      <div className="font-bold mb-3">{data.title}</div>
      <div>
        <button
          className="btn w-full bg-[#54CF68] text-white"
          onClick={() => addResolved(data.id)}
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default Task_card;
