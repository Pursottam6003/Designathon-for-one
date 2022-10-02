import React from 'react'

import logo from "../../images/logo.png"
import nitapLogo from "../../images/logo/nitap-logo.png"
import technodayaLogo from "../../images/logo/technodaya-logo1.png"

export const Navbar = () => {
  return (
    <div className='navbar-component'>
      {/* <div className='Navbar'>
          
          <div className='inner'>
       
          <img src="https://img.icons8.com/fluency/25/000000/mail.png" alt='mail' style={{alignItems:'center' }}/>
            <span className='innertext'> webmail : abcd@nitap.ac.in</span>
          </div>

          <div className='inner'>
          <img src="https://img.icons8.com/fluency/25/000000/phone-disconnected.png" style={{alignItems:'center'}} alt='phone'/>
          <span className='innertext'> Phone: 60333938402</span>
          
          </div>

          <div>
            <button className='homeButton'>NIT HOME</button>
          </div>
      </div> */}

      <header className='banner'>
        <div className='logos'>
          <img src={nitapLogo} alt="NIT Arunachal Pradesh Logo"  />
          <div className='sep' />
          <div className='college-name'>
            <img src={technodayaLogo} alt="Technodaya Logo" height="64"/>
            <p className='nitap'>National Institute of Technology,<br/> Arunachal Pradesh</p>
          </div>
        </div>
      </header>


      {/* <div className='logoItems'>
      
      <div className='logo'>
        <img id='logo' src={logo} alt='logo'></img>
      </div>


      <div className='logoContaint'>
      Technonodaya Newsletters 
      <p className='collegeName'>
        NIT Arunachal Pradesh
      </p>
      </div>
      </div> */}


    <div className='nav-items'>
    <a className='nav-item' href='/'> <div>Home</div></a>
    <a className='nav-item' href='/addBlogs'> <div>Add New Activity</div></a>
    <a className='nav-item' href='/magazine'> <div>Magazines</div></a>
    <a className='nav-item' href='https://youtu.be/dQw4w9WgXcQ'> <div>if you dont have direction</div></a>
   
    </div>
    
    </div>
  )
}
