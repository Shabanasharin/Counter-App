import './App.css'
import Count from "./components/Count"
function App() {

  return (
    <>
     <h1 className='text-center mt-5 'style={{color:'#fff',height:'60px'}}>Counter App</h1>
     <div style={{height:'100%'}} className='w-100 d-flex align-items-center justify-content-center'>
       <Count/>
     </div>
    </>
  )
}

export default App
