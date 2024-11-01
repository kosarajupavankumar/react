import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { increment, decrement } from '../../redux/slice/counterSlice';

const Counter = () => {

    // import the state from Store
    const counterStateFromStore = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();



    const onIncrement = () => {
        dispatch(increment());
    }

    const onDecrement = () => {
        dispatch(decrement());
    }

return (
    <div>
        <h2>Counter : {counterStateFromStore}</h2>
        <button 
            style={{
                backgroundColor: '#4CAF50', 
                border: 'none', 
                color: 'white', 
                padding: '15px 32px', 
                textAlign: 'center', 
                textDecoration: 'none', 
                display: 'inline-block', 
                fontSize: '16px', 
                margin: '4px 2px', 
                cursor: 'pointer', 
                borderRadius: '12px'
            }} 
            onClick={onIncrement}
        >
            Increment
        </button>
        <button 
            style={{
                backgroundColor: '#f44336', 
                border: 'none', 
                color: 'white', 
                padding: '15px 32px', 
                textAlign: 'center', 
                textDecoration: 'none', 
                display: 'inline-block', 
                fontSize: '16px', 
                margin: '4px 2px', 
                cursor: 'pointer', 
                borderRadius: '12px'
            }} 
            onClick={onDecrement}
        >
            Decrement
        </button>
    </div>
)
}

export default Counter
