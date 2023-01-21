import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthStatus } from '../hooks/hooks';

const UnauthorizedComponent = () => (
  <div className='container'>
    <h2>Unauthorized</h2>
  </div>
)

const ProtectedComponent = ({ children, isAdmin }) => {
  const { checkingStatus, loggedIn, admin } = useAuthStatus();
  const history = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!checkingStatus && !loggedIn) {
      return history('/login', {state: {
        from: location.pathname.includes('/previews') ? location.pathname : null
      }});
    }
  })

  return (
    checkingStatus ? <div className='container'><h1>Please wait...</h1></div> : (<>
      {loggedIn && (<>
        {!isAdmin ? <>{children}</> : (<>
          {admin ? <>{children}</> : <UnauthorizedComponent />}
        </>)}
      </>)}
    </>)
  )
};

export default ProtectedComponent;