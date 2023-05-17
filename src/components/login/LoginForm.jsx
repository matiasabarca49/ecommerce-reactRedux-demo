import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../../reducers/user/userSlice'
import { setLogin } from '../../reducers/user/isLoginSlice'

const LoginForm = ( { users }  ) =>{

    const emailRef = useRef()
    const passwordRef = useRef()
    const distpach = useDispatch()
    const [error, setError] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
        console.log(users)
        const userFound = users.find(  user => user.email === emailRef.current.value  )
        if (userFound){
            if (userFound.token === passwordRef.current.value){
                distpach(setUser(userFound))
                distpach(setLogin())
            }
            else{
                setError(true)
            }   
        }
        else{
            setError(true)
        }
            
           
    }

    return(
        <div>
            <h1>Login</h1>
            {error && <div> <p style={{color: "red"}}>El usuario o password es incorrecto</p> </div>}
            <form onSubmit={ (e)=> handleSubmit(e) }>
                <div>
                    <label htmlFor="">email</label>
                    <input type="text" ref={emailRef} />
                </div>
                <div>
                <label htmlFor="">Contraseña</label>
                    <input type="password" ref={passwordRef} />
                </div>
                <button>Login</button>
            </form>
        </div>
    )

}

export default LoginForm