import React from 'react';

const Resolved_card = ({data}) => {

    //console.log(data);
    

    return (
        <div>
            <div className='bg-[#E0E7FF] p-5 mb-5 rounded-2xl'>
            <div className='font-bold'>{data.title}</div>

        </div>
        </div>
    );
};

export default Resolved_card;