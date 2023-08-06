import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import Home from '../../pages/home';
import Tour from '../../pages/tour';
import Tourdetails from '../../pages/tourdetails';
import Login from '../../pages/login';
import Register from '../../pages/register';
import Searchresult from '../../pages/searchresult';
import Thankyou from '../../pages/Thankyou';


function router() {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}  />
        <Route path='/home'  element={<Home/>}/>
        <Route path='/tour'  element={<Tour/>}/>
        <Route path='/tour/:id'  element={<Tourdetails/>}/>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/register'  element={<Register/>}/>
        <Route path='/thankyou'  element={<Thankyou/>}/>

        <Route path='/tour/search'  element={<Searchresult/>}/>
    </Routes>
  )
}

export default router