import React from 'react'
import loginImg from '../images/LoginPageImg.jpg'
import lock from '../images/lock2.png'
import envelop from '../images/envelop.png'

export const AdminLogin = () => {
  return (
    <>
        <div className='LoginPage'>
            <div className='LoginImage'>
                <img src={loginImg}></img>
            </div>
            <div className='FormBox'>
                <div className='GreetBox'>
                    <h1>Welcome Admin :)</h1>
                    <p>To keep connected with us please login with your official registered email address and password 🔑</p>
                </div>
                <form className='loginform'>
                <label className='emailHolder'></label>
                <img src={lock} id='lock'/>
          
                <input type='email' required placeholder='Email'></input>
            
                <br/>
                <img src ={envelop} id='envelop'></img>
                <input type='text' required placeholder='Password'></input>
                <br/>
                <input type='checkbox' className='checkbox' value={'remember me'}  required/>Remember me 
                <p className='forgotpasswd'>Forgot Password ?</p>
                <br/>
                <button className='LoginButton'>Login Now</button>
                </form>
            </div>
        </div>

    </>
  )
}
