import React, { useEffect, useState } from 'react'
import { reauth, db } from '../config/config'
import lock from '../images/lock2.png'
import envelop from '../images/envelop.png'
import { ReactComponent as ErrorIcon } from '../images/icons/error.svg'
import { ReactComponent as SpinnerIcon } from '../images/icons/spinner.svg'

import { useNavigate, useLocation } from 'react-router-dom'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getDoc, doc } from 'firebase/firestore'
import cx from 'classnames';
import styles from './styles/Login.module.scss';

export const Login = ({ user, loginUser, logoutUser }) => {
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

    signInWithEmailAndPassword(reauth, email, password).then(async (res) => {
      const docSnap = await getDoc(doc(db, 'users', res.user.uid));
      if (docSnap.exists()) {
        const authUser = {
          user: res.user,
          admin: docSnap.data().Role === 'admin'
        }
        loginUser(authUser);

        if (location.state) {
          history(location.state.from);
        } else {
          history(authUser.admin ? '/admin' : '/submit');
        }
      }
      else {
        signOut(reauth);
        setErrorMsg('Invalid user!');
        resetForm();
        setLoading(false);
      }
    }).catch(err => {
      setErrorMsg(err.message);
      resetForm();
      logoutUser();
      setLoading(false);
    })
  }

  const resetForm = () => {
    setEmail('');
    setPassword('');
  }

  useEffect(() => {
    if (user.user) history('/');
  })

  return (
    <div className={styles['login-page']}>
      <div className='container'>
        <header className='page-header'>
          <h1 className='heading'>Login</h1>
        </header>
        <div className={styles['form-box']}>
          <div className={styles.messages}>
            {errorMsg && <div className={styles['login-msg error']}>
              <div className='icon'><ErrorIcon /></div>
              {errorMsg}
            </div>}
          </div>
          <form className={styles['login-form']} onSubmit={handleLogin}>
            <div className={cx(styles['login-field'], styles.email)}>
              <img alt="" src={envelop} className={styles.icon} />
              <input type='email' required placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} ></input>
            </div>
            <div className={cx(styles['login-field'], styles.password)}>
              <img alt="" src={lock} className={styles.icon} />
              <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} required placeholder='Password'></input>
            </div>
            {loading ? (
              <button className={styles['login-btn']} style={{ display: 'flex', justifyContent: 'center' }} disabled type="submit">
                <SpinnerIcon style={{ height: '1.2rem' }} />
              </button>
            ) : (
              <button className={styles['login-btn']} type="submit">Login</button>
            )}

          </form>
        </div>
      </div>
    </div>
  )
}
