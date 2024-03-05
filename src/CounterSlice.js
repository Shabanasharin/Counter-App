import { createSlice } from "@reduxjs/toolkit";

const counterSlice =createSlice({
    name:'counter',
    initialState :{count: 0},
    reducers:{
        incriment : (state)=>{
            state.count++
        },
        decrement :(state)=>{
            state.count--
        },
        reset:(state)=>{
           return { 
            ...state,count:0
        }
        },
        incrimentByAmount:(state,action)=>{
            state.count += +action.payload
        }
    }
})
export const {incriment,decrement,reset,incrimentByAmount}= counterSlice.actions
export default counterSlice.reducer