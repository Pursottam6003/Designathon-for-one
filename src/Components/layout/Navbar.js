import React from 'react'

import logo from "../../images/logo.png"

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
      Technonodaya Newsletters 
      <p className='collegeName'>
        NIT Arunachal Pradesh
      </p>
      </div>
      </div>


    <div className='TopNavigation'>
    <a href='/'> <div  className='nav_items' >Home</div></a>
    <a href='/addBlogs'> <div  className='nav_items' >Add New Activity</div></a>
    <a href='/magazine'> <div  className='nav_items' >Magazines</div></a>
     <a href='https://youtu.be/dQw4w9WgXcQ'> <div  className='nav_items' >if you dont have direction</div></a>
   
    </div>
    
    </>
  )
}
