import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React,{useState} from 'react'
import {reauth, db} from '../config/config'


export const Signup = () => {

    const [fullName, setFullname]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [errorMsg, setErrorMsg]=useState('');
    const [successMsg, setSuccessMsg]=useState('');

    const handleSignup=(e)=>{
        e.preventDefault();
        // console.log(fullName, email, password);
        createUserWithEmailAndPassword(reauth, email, password).then(async credentials => {
            try {
                await setDoc(doc(db, 'users', credentials.user.uid), {
                    FullName: fullName,
                    Email: email,
                    Password: password
                })
    
                setSuccessMsg('Signup Successfull. You will now automatically get redirected to Login');
                    // empty the state of name
                    setFullname('');
                    setEmail('');
                    setPassword('');
                    setErrorMsg('');         
            } catch (error) {
                setErrorMsg(error.message);
            }
        }).catch(err => {setErrorMsg(err.message)});
    }

    return (
        <>
        <div className='container'>
            <br></br>
            <br></br>
            <h1>Sign Up</h1>
            <hr></hr>
            {successMsg && <>
                <div className='success-msg'>{successMsg}</div>
            </>}
            <form className='form-group' autoComplete="off" onSubmit={handleSignup}>
                <label>Full Name</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setFullname(e.target.value)} value={fullName}></input>
                <br></br>
                <label>Email</label>
                <input type="email" className='form-control' required
                 onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                <br></br>
                <label>Password</label>
                <input type="text"  className='form-control' required
                 onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                <br></br>
                <div className='btn-box'>
                    <button type="submit" className='SignUpBtn'>SIGN UP</button>
                </div>
            </form> 

            {errorMsg && <>
                <div className='error-msg'>{errorMsg}</div>
            </>}
        </div>
        </>
    )
}