import * as counter from './constants'

export const increment =(value)=>{
    return{
        type: counter.INC,
        value: value
    }
}
export const decrement =(value)=>{
    return{
        type: counter.DEC,
        value: value
    }
}

export const decrementWithCekAction = (value)=>{
    return (dispacth, getState) => {
        if(getState().counter.count > 0){
            dispacth(decrement(value))
        }
    }
}