import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { setUser, unsetUser } from "./reducers/user/userSlice"


function App() {

  const distpach = useDispatch()
  const {name, email}  = useSelector(state => state.user)

  return (
    <>
      <div>
        <h1>Aplicacion con Redux</h1>
        <h3>Hola</h3>
        <p>Tu nombre es: {name}</p>
        <p>Tu email es: {email}</p>
        <button onClick={ () => {
          distpach(setUser({name: 'Pedro', email: "pedro@correo.com", token: "dfhr33"}))
        }
        }> Cambiar Usuario </button>
        <button onClick={()=>{
          distpach(unsetUser())
        }}> Usuario Por defecto </button>
      </div>
    </>
  )
}

export default App
