import React, { useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { unsetLogin } from '../../reducers/user/isLoginSlice'
import PreviewCart from './PreviewCart' 

const layoutNavbar = { 
    height: "50px",
    backgroundColor: "#008de9",
    backgroundImage: "linear-gradient(135deg, #008de9 0%, #282a63 100%)",
    color: "#fff"
}

const Navbar = () => {

    const distpach = useDispatch()
  
    const { name } = useSelector(state => state.user)
    const { totalCount } = useSelector(state => state.cart)

    const [showCart, setShowCart] = useState(false)


  return (
    <>
      
      <header className='d-flex justify-content-around align-items-center' style={layoutNavbar}>
          <div>{name}</div>
          <div className='d-flex align-items-center gap-3'>
          <button type="button" className= "btn text-light" onClick={ ()=> setShowCart(!showCart) } >
            Carrito <span className={totalCount ? "badge text-bg-danger" : "badge text-bg-secondary" }>{totalCount}</span>
          </button>
              <button className="btn btn-outline-danger" onClick={ () => distpach(unsetLogin()) }>Salir</button>
          </div>
      </header>
      {showCart && <PreviewCart />}

    </> 

  )
}

export default Navbar