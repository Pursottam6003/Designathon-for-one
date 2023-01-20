import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuthStatus } from '../hooks/hooks';

const UnauthorizedComponent = () => (
  <div className='container'>
    <h2>Unauthorized</h2>
  </div>
)

const ProtectedComponent = ({ children, isAdmin }) => {
  const { checkingStatus, loggedIn, admin } = useAuthStatus();
  const history = useNavigate();

  useEffect(() => {
    if (!checkingStatus && !loggedIn) {
      return history('/login');
    }
  })

  return (
    checkingStatus ? <h1>Please wait...</h1> : (<>
      {loggedIn && (<>
        {!isAdmin ? <>{children}</> : (<>
          {admin ? <>{children}</> : <UnauthorizedComponent />}
        </>)}
      </>)}
    </>)
  )
};

export default ProtectedComponent;