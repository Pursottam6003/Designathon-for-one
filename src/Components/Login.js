import React,{useState} from 'react'
import {auth} from '../config/config'

import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'


export const Login = () => {
    const history = useNavigate();

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [errorMsg, setErrorMsg]=useState('');
    const [successMsg, setSuccessMsg]=useState('');

    const handleLogin=(e)=>{
        e.preventDefault();
       // console.log(email, password);
       auth.signInWithEmailAndPassword(email,password).then(() =>{
        setSuccessMsg('Login sucessfully you will now automatically get redirected to homepage')
            setEmail('');
            setPassword('');
            setErrorMsg('');
            setTimeout(()=>{
                setSuccessMsg('');
                history('/');
            },3000)
       })
       .catch(error =>setErrorMsg(error.message));
    }

    return (
        <>
        <div className='container-sm route'>
            <br></br>
            <br></br>
            <h1>Login</h1>
            <hr></hr>
            {successMsg && <>
                <div className='success-msg'>{successMsg}</div>
            </>}
            <form className='form-group' autoComplete="off"
            onSubmit={handleLogin}>               
                <label>Email</label>
                <input type="email" className='form-control' required
                onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                <br></br>
                <label>Password</label>
                <input type="password" className='form-control' required
                onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                <br></br>
                <div className='btn-box'>
                    <span>Don't have an account SignUp
                    <Link to="/signup" className='link'>  Here</Link></span>
                    <br></br>
                    <button type="submit" className='LoginBtn'>LOGIN</button>
                </div>
            </form>

            {errorMsg && <>
                <div className='error-msg'>{errorMsg}</div>
            </>}
        </div>
        </>
    )
}