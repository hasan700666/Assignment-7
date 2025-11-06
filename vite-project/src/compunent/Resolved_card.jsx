import React from 'react';

const Resolved_card = ({data}) => {
    return (
        <div>
            <div className='bg-white p-5 mb-5'>
            <div className='font-bold mb-3'>{data.title}</div>
            <div><button className='btn w-full bg-[#54CF68] text-white'>Complete</button></div>
        </div>
        </div>
    );
};

export default Resolved_card;