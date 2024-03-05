import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, incriment, incrimentByAmount, reset } from '../CounterSlice'

function Count() {
  const [amount,setAmount] = useState(0)
  const dispatch = useDispatch()
  const count = useSelector(state=>state.counterReducer.count)
  const handleIncrimentByAmount = ()=>{
    if(amount){
      dispatch(incrimentByAmount(amount))
    }else{
      alert("Enter the Valied amount")
    }
  }
  return (
    <div className='border rounded p-5 mt-3 shadow' >
       <h1 style={{color:'#fff',fontSize:'100px ',textAlign:'center', height:'130px'}}>{count}</h1>
       <div style={{width:'500px'}} className="d-flex justify-content-between mt-5">
        <button onClick={()=>dispatch(decrement())} className='btn btn-warning' style={{color:'#fff'}}>DECREMENT</button>
        <button onClick={()=>dispatch(reset())} className='btn btn-danger '>RESET</button>
        <button onClick={()=>dispatch(incriment())} className='btn btn-success '>INCRIMENT</button>


       </div>
       <div className="d-flex justify-content-between mt-5">
        <input onChange={e=>setAmount(e.target.value)} type="text" className='form-control' placeholder='Incriment Amount' />
        <button onClick={handleIncrimentByAmount} className='btn btn-primary ms-4'>Incriment By Amount</button>
       </div>

    </div>
  )
}

export default Count