
import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { incr, decr, reset, incrementByAmount, decrementByAmount } from "./counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0);

    //verify if we get number value
    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(incr())}>+</button>
                <button onClick={() => dispatch(decr())}>-</button>
                <button onClick={() => dispatch(reset())}> RESET</button>
            </div>
            <input
                type="text"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
            />

            <div>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
                <button onClick={() => dispatch(decrementByAmount(addValue))}>Decrement Amount</button>
                <button onClick={resetAll}>Reset All</button>
            </div>
        </section>
    )
}

export default Counter
