import React, { useEffect, useState } from 'react'
import { auth, fs } from '../config/config'
import lock from '../images/lock2.png'
import envelop from '../images/envelop.png'
import { ReactComponent as ErrorIcon } from '../images/icons/error.svg'
import { ReactComponent as SpinnerIcon } from '../images/icons/spinner.svg'

import { useNavigate, useLocation } from 'react-router-dom'

export const Login = ({ user, loginUser }) => {
  const history = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    auth.signInWithEmailAndPassword(email, password).then((res) => {
      fs.collection('users').doc(res.user.uid).get()
        .then(snapshot => {
          loginUser({
            user: res.user,
            admin: snapshot.data().Role === 'admin'
          })
          if (location.state !== null &&
            location.state.from.includes('/previews')) {
            history(location.state.from)
          }
          else {
            history(snapshot.data().Role === 'admin'
              ? '/admin/' : '/submit');
          }
        })
      console.log('login successful...');
    })
      .catch(error => {
        setErrorMsg(error.message);
        resetForm();
        setLoading(false);
      });
  }

  const resetForm = () => {
    setEmail('');
    setPassword('');
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
          <div className='messages'>
            {errorMsg && <div className='login-msg error'>
              <div className='icon'><ErrorIcon /></div>
              {errorMsg}
            </div>}
          </div>
          <form className='login-form' onSubmit={handleLogin}>
            <div className='login-field email'>
              <img alt="" src={envelop} className='icon' />
              <input type='email' required placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} ></input>
            </div>
            <div className='login-field password'>
              <img alt="" src={lock} className='icon' />
              <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} required placeholder='Password'></input>
            </div>
            {loading ? (
              <button className='login-btn' style={{ display: 'flex', justifyContent: 'center' }} disabled type="submit">
                <SpinnerIcon style={{ height: '1.2rem' }} />
              </button>
            ) : (
              <button className='login-btn' type="submit">Login</button>
            )}

          </form>
        </div>
      </div>
    </div>
  )
}
