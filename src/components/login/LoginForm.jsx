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
        <div className='container mt-5 mx-auto p-3 rounded bg-dark text-light'>
            <h1 className='text-center my-5'>Login</h1>
            {error && <div> <p style={{color: "red"}}>El usuario o password es incorrecto</p> </div>}
            <form  className="container" onSubmit={ (e)=> handleSubmit(e) }>
                <div>
                    <label htmlFor="">Email:</label>
                    <input className='w-100' type="text" ref={emailRef} />
                </div>
                <div>
                    <label htmlFor="">Contraseña:</label>
                    <input className="w-100" type="password" ref={passwordRef} />
                </div>
                <button className='btn btn-primary mt-2'>Login</button>
            </form>
        </div>
    )

}

export default LoginForm