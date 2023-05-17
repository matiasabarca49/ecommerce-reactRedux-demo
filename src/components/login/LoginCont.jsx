import React, { useEffect, useState } from 'react'
import { useSelector} from "react-redux"
import PagesCont from '../pages/PagesCont'
import LoginForm from './LoginForm'



const LoginCont = ()=>{

    const { isLogin } = useSelector(state => state.isLogin)
    const [users, setUsers] = useState([])
    
    useEffect(() => {
      
        fetch("./data/user.json")
            .then(  res => res.json())
            .then( data => {
                setUsers(data)
            } )
    }, [])
    
    return(
        <div>
            {isLogin
                ? <PagesCont />
                : <LoginForm  users = { users } />
            }
        </div>
    )
}

export default LoginCont