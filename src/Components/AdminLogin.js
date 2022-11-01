import React, { useState } from 'react'
import { auth } from '../config/config'
import loginImg from '../images/LoginPageImg.jpg'
import lock from '../images/lock2.png'
import envelop from '../images/envelop.png'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

    const history = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');


    const handleLogin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(() => {
            setSuccessMsg('Login successful! Redirecting...')
            setEmail('');
            setPassword('');
            setErrorMsg('');
            setSuccessMsg('');

            const currUid = auth.currentUser.uid;
            sessionStorage.setItem('UID', currUid);
            history(-1);
        })
            .catch(error => setErrorMsg(error.message));
    }
    return (
        <div className='login-page route'>
            <div className='container'>
                <header className='page-header'>
                    <h1 className='heading'>Login</h1>
                </header>
                <div className='form-box'>
                    {successMsg && <>
                        <div className='success-msg'>{successMsg}</div>
                    </>}
                    <form className='login-form' onSubmit={handleLogin}>
                        <div className='login-field email'>
                            <img alt="" src={envelop} className='icon' />
                            <input type='email' required placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} ></input>
                        </div>
                        <div className='login-field password'>
                            <img alt="" src={lock} className='icon' />
                            <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} required placeholder='Password'></input>
                        </div>
                        <button className='login-btn' type="submit">Login</button>
                    </form>
                    {errorMsg && <>
                        <div className='error-msg'>{errorMsg}</div>
                    </>}
                </div>
            </div>
        </div>
    )
}
