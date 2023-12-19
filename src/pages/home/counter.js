import React , {useState} from 'react';
import { useSelector , useDispatch } from 'react-redux';

import {
    decrement , 
    increment , 
    incrementByAmount , 
    incrementAsync ,
    selectCount,
} from './index.js';

// import style from './style.module.scss';

export function Counter () {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount , setIncrementAmount ] = useState('2')
    

    return (
        <>
            <div>
               <div className="container">
               <button aria-label='Increment value' className='btn btn-outline-info' onClick={() => dispatch(increment())}>+</button>
                <span>{count}</span>
                {/* <button className='btn btn-outline-danger' onClick={dispatch(decrement())}>-</button> */}
                <input type="text"  className='input-group mb-3' value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)}/>
                <button className='btn btn-warning mx-5' onClick={() => dispatch(incrementByAmount(Number(incrementByAmount) || 0))}>Add Amount</button>
                <button className='btn btn-primary' onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}>ssss</button>
               </div>
            </div>
        </>
    )
}