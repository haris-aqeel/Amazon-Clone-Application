import React from 'react'
import {Link, useHistory} from "react-router-dom"
import './firebase'
import './Login.css'

const Login = () => {
    return (
        <div className='login'>
            <Link to="/">
                <img 
                className="login__logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
                alt=""/>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
            </div>
        </div>
    )
}

export default Login
