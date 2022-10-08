import React from 'react'
import {auth} from '../config/config'
import loginImg from '../images/LoginPageImg.jpg'
import lock from '../images/lock2.png'
import envelop from '../images/envelop.png'
import { useState,useNavigate } from 'react'
import { Login } from './Login'


const LoginAuth= ()=>{
   
    console.log('hello')

    



}


export const AdminLogin = () => {

    
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [errorMsg, setErrorMsg]=useState('');
    const [successMsg, setSuccessMsg]=useState('');

    
    const handleLogin=(e)=>{
        e.preventDefault();
       // console.log(email, password);
       console.log('hello bro')
       auth.signInWithEmailAndPassword(email,password).then(() =>{
        setSuccessMsg('Login sucessfully you will now automatically get redirected to homepage')
            setEmail('');
            setPassword('');
            setErrorMsg('');
            setTimeout(()=>{
                setSuccessMsg('');
                console.log('logged in sucessfully')
            },3000)
       })
       .catch(error =>setErrorMsg(error.message));
    }
    return (
        <>
        <div className='LoginPage route'>
            <div className='container'>
                <div className='login-container'>
                    <div className='login-image'>
                        <img src={loginImg}></img>
                    </div>
                    <div className='form-box'>
                        <div className='greet-box'>
                            <h2 className='heading'>Admin Login</h2>
                        </div>
                        <form className='login-form'>
                            <div className='login-field email'>
                                <img src={envelop} className='icon'></img>
                                <input type='email' required placeholder='Email' onChange={(e)=>setEmail(e.target.value)} value={email} ></input>
                            </div>
                            <div className='login-field password'>
                                <img src={lock} className='icon' />
                                <input type='text'   onChange={(e)=>setPassword(e.target.value)} value={password}  required placeholder='Password'></input>
                            </div>
                            <button className='login-btn' onClick={handleLogin}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
