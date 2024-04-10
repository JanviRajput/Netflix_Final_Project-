import React from 'react'
import Callingpages from './Pages/Callingpages'
import { BrowserRouter, Route } from 'react-router-dom'
import Signin from './Pages/Signin'


export default function App() {
  return (
    <div>

       <Callingpages/>

       {/* <BrowserRouter> */}
       {/* <Route> */}
       {/* <Route path='/' element={<Callingpages />}/> */}
       {/* <Route path='/sign' element={<Signin/>}/> */}
       {/* </Route> */}
       {/* </BrowserRouter> */}
    </div>
  )
}
