import React from 'react';

const Task_card = ({data}) => {

    //console.log(data);
    

    return (
        <div>
            <div>{data.name}</div>
            <div><button className='btn'>Complete</button></div>
        </div>
    );
};

export default Task_card;