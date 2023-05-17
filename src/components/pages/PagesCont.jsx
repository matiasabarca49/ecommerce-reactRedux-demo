import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { unsetLogin } from '../../reducers/user/isLoginSlice'
import Navbar from '../Navbar/Navbar'
import Home from './Home'


const PagesCont = (  ) => {

  const distpach = useDispatch()
  const { name }= useSelector( state => state.user)

  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={ <Home/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default PagesCont