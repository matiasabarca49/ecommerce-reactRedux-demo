import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { unsetLogin } from '../../reducers/user/isLoginSlice'

const layoutNavbar = {
    display: "flex", 
    justifyContent: "space-around", 
    alignItems: "center", 
    backgroundColor: "#008de9",
    backgroundImage: "linear-gradient(135deg, #008de9 0%, #282a63 100%)",
    color: "#fff"
}

const Navbar = () => {

    const distpach = useDispatch()
    const { name } = useSelector(state => state.user)


  return (
    <header style={layoutNavbar}>
        <div>{name}</div>
        <div style={{display: "flex", gap: "0.5rem"}}>
            <p>Carrito: 0 </p>
            <button onClick={ () => distpach(unsetLogin()) }>Salir</button>
        </div>
    </header>
  )
}

export default Navbar