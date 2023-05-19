import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { unsetLogin } from '../../reducers/user/isLoginSlice'
import Navbar from '../Navbar/Navbar'
import Home from './home/Home'


const PagesCont = (  ) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    
    fetch("./data/products.json")
      .then( res => res.json() )
      .then( data => {
        setProducts(data)
      })

  }, [])
  

  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={ <Home  products={ products } /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default PagesCont