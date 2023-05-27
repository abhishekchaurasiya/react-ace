
import React, { useState } from 'react';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';

// Higher Order Components
const HOC = () => {
    return (
        <div>
            <Counter />
        </div>
    )
};


const Counter = () => {
    const [count, setCount] = useState(1);

    const increaseHandler = () => {
        setCount((prevData) => prevData + 1)
    }

    const decreaseHandler = () => {
        if (count <= 0) return 0;
            setCount((prevData) => prevData - 1)
    }

    return (
        <div className=' flex items-center gap-x-3'>
            <button className='' onClick={increaseHandler}><CiCirclePlus size={20} /></button>
            <p>{count}</p>
            <button className='' onClick={decreaseHandler}><CiCircleMinus size={20} /></button>
        </div>
    )
};


export default HOC;