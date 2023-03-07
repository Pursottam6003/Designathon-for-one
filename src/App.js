import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from "./Components/layout/Layout"

import { Home, Read, Issue, About, Submit, AdminConsole, Login, Activity, NotFound } from './pages'
import ProtectedComponent from "./Components/ProtectedRoute";

// import { Signup } from "./Components/SignUp";
import { UploadCover } from "./Components/uploadCover";

import { reauth } from "./config/config";
import { useAuthStatus } from "./hooks/hooks";

function App() {
  const [user, setUser] = useState({ user: null, admin: false });
  const { checkingStatus, loggedIn, admin } = useAuthStatus();

  const handleLogout = () => {
    reauth.signOut()
      .then(() => {
        setUser({ user: null, admin: false });
      })
      .catch((err) => { console.log(err) });
  }

  const handleLogin = (user) => {
    setUser(user);
  }

  useEffect(() => {
    if (!checkingStatus) {
      setUser({ user: loggedIn, admin: admin });
    }
  }, [checkingStatus])

  return (
    <BrowserRouter>
      <Layout user={user} logoutUser={handleLogout} checkingStatus={checkingStatus}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/magazine" element={<Read />} />
          <Route path="/about" element={<About />} />

          <Route path="/submit" element={(
            <ProtectedComponent isAdmin={false} children={<Submit user={user.user} />} />
          )} />

          <Route path="/activity" element={(
            <ProtectedComponent isAdmin={false} children={<Activity displayName={user.user ? user.user.displayName : ''} uid={user.user ? user.user.uid : null} />} />
          )} />

          <Route path="/admin/*" element={(
            <ProtectedComponent isAdmin={true} children={<AdminConsole />} />
          )} />

          <Route path="/issues/*" element={(
            <Issue slug='issues' />
          )} />
          <Route path="/previews/*" element={(
            <ProtectedComponent isAdmin={false} children={<Issue slug='previews' />} />
          )} />
          <Route path="/login" element={
            <Login user={user} loginUser={handleLogin} logoutUser={handleLogout} />
          } />

          <Route path="/uploadcover" element={<UploadCover />} />

          <Route path="*" element={<NotFound />}/>


          {/* <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
