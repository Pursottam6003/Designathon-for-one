import React from 'react'

import logo from "../images/logo.png"

export const Navbar = () => {
  return (
    <>
      <div className='Navbar'>
          
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
      </div>


      <div className='logoItems'>
      
      <div className='logo'>
        <img id='logo' src={logo} alt='logo'></img>
      </div>


      <div className='logoContaint'>
      Technonodaya Newsletters Web App
      <p className='collegeName'>
        NIT Arunachal Pradesh
      </p>
      </div>
      </div>


    <div className='TopNavigation'>
      <div>Home</div>
      <div>About Us</div>
      <div>Departments</div>\
      <div>Sections</div>
      <div>Technonodaya Newsletters</div>
    </div>
    
    </>
  )
}
