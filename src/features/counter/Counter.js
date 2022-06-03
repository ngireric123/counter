
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { incr, decr } from "./counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(incr())}>+</button>
                <button onClick={() => dispatch(decr())}>-</button>
            </div>
        </section>
    )
}

export default Counter
