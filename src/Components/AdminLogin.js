import React from 'react'
import loginImg from '../images/LoginPageImg.jpg'
import lock from '../images/lock2.png'
import envelop from '../images/envelop.png'

export const AdminLogin = () => {
    return (
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
                                <input type='email' required placeholder='Email'></input>
                            </div>
                            <div className='login-field password'>
                                <img src={lock} className='icon' />
                                <input type='text' required placeholder='Password'></input>
                            </div>
                            <button className='login-btn'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
