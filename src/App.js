import Rout from './Component/Rout'
import LoadingPage from './Component/LoadingPage'
import GetNews from './Component/GetNews'
import { useEffect, useState } from 'react'
export default function App() {
   
  const [component ,setcomponent]=useState();
  useEffect(()=>{
     GetNews("world").then((res)=>{
       if(res.status==='error')
        {
          setcomponent( <LoadingPage/> );
        }      
        else
        {
          setcomponent( <Rout/> ); 
        }
     })
  },[])
  console.log(process.env.REACT_APP_API)
  return (
    <div>
     {component}
    </div>
  )
}
