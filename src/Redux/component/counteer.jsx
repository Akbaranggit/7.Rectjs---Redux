import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementWithCekAction, increment } from "../app/Features/actions";

function Counter(){
    let {count} = useSelector(state=>state.counter)
    const dispatch = useDispatch();
    return(
        <div>
            <button onClick={()=> dispatch(decrementWithCekAction(1))}> - </button>
            {' '}<span>{count}</span>{' '}
            <button onClick={()=> dispatch(increment(1))}> + </button>
        </div>
    );
}
export default Counter;