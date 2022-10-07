import React from 'react'
import technodayaLogo from "../../images/logo/technodaya-logo-white.png"

export const Footer = () => {
  return (
    <div className='Footer'>

      <div className='container'>
      <div className='info-Footer'>
        <div className='rights'>
          <div> <img id='technodayaLogo-white' src={technodayaLogo} alt="Technodaya" />

          </div>
          <div> <h4>Technodaya Magazine</h4>
            <p> National Institute of Technology</p>
            <p> Jote , Arunchal Pradesh </p>
          </div>

          <div>
            <p>+123456890</p>
            <p> <a>example@nitap.ac.in</a></p>




          </div>



        </div>

        <div className='left'>
          content loading....
        </div>
      </div>
      <div className='copyright'>&#169; 2022 all rights are preserved , Technodaya , NIT arunchal pradesh </div>
      </div>
    </div>
  )
}
