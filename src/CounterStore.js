import { configureStore } from  "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";

const CounterStore = configureStore({
    reducer:{
      counterReducer : CounterSlice
    }
})

export default CounterStore