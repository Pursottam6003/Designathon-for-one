import React from 'react'
import technodayaLogo from "../../images/logo/technodaya-logo-white.png"

export const Footer = () => {
  return (
    <div className='footer'>

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
            <p>0360-2954549</p>
            <p> <a>nitapadmin@nitap.ac.in</a></p>




          </div>



        </div>

        <div className='left'>
        “Dream, Dream Dream
        Dreams transform into thoughts
        And thoughts result in action.”
        ― DR APJ ABDUL KALAM
        </div>
      </div>
      </div>
      <div className='copyright '>
      <div className='container'>&#169; 2022 all rights are preserved , Technodaya , NIT arunchal pradesh </div>
      </div>
    </div>
  )
}
