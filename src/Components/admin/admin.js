import React, { useEffect, useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import { ConsoleNav } from "./consoleNav"
import { Draft } from "./draft"
import { Submissions } from "./submissions"
import { fs } from '../../config/config'

export const AdminConsole = (props) => {
  const [admin, setAdmin] = useState('')

  let history = useNavigate()
  useEffect(() => {
    const CURR_UID = sessionStorage.getItem('UID')
    
    if (CURR_UID) {
      fs.collection('users').doc(CURR_UID).get().then(snapshot => {
        if (snapshot.exists) {
          if (snapshot.data().Role === 'admin') {
            setAdmin(CURR_UID)
            history('/admin/')
          } else {
            history('/submit')
          }
        }
        else {
          history('/login')
        }
      })
    } else {
      history('/login')
    }
  }, [])

  return (
    <>
    {admin ? (
      <div className="admin-portal route">
        <div className="admin-view">
          <aside>
            <ConsoleNav />
            <div className="console-footer">
              <p className="c">&#169; 2022 Technodaya, NITAP</p>
            </div>
          </aside>
          <main className="main-body">
            <Routes>
              <Route path="/" element={<Submissions />} />
              <Route path="draft" element={<Draft />} />
            </Routes>
          </main>
        </div>
      </div>
    ) : (
      <div className="route container">
        <p>Please wait...</p>
      </div>
    )}
    </>
  )
}