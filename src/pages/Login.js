import React, { useEffect, useState } from 'react'
import { auth, fs } from '../config/config'
import lock from '../images/lock2.png'
import envelop from '../images/envelop.png'
import { useNavigate } from 'react-router-dom'

export const Login = ({user, loginUser}) => {

    const history = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');


    const handleLogin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((res) => {
            console.log(res.user);
            fs.collection('users').doc(res.user.uid).get()
            .then(snapshot => {
                if (snapshot.data().Role === 'admin') {
                    history('/admin/');
                    loginUser({user: res.user, admin: true})
                } else {
                    history('/submit');
                    loginUser({user: res.user, admin: false})
                }
            })
            console.log('login successful...');
            setSuccessMsg('Login successful! Redirecting...');
            setEmail('');
            setPassword('');
            setErrorMsg('');
            setSuccessMsg('');
        })
            .catch(error => setErrorMsg(error.message));
    }

    useEffect(() => {
        if (user.user) history('/');
    })

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
