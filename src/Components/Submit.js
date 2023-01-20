import React, { useEffect, useState } from 'react'
import { AddBlogs } from './addBlogs'
import { fs } from "../config/config"
import { useNavigate } from 'react-router-dom'

export const Submit = (props) => {
  const [user, setUser] = useState('')
  let history = useNavigate()
  useEffect(() => {
    const CURR_UID = sessionStorage.getItem('UID')
    if (CURR_UID) {
      fs.collection('users').doc(CURR_UID).get().then(snapshot => {
        if (snapshot.exists) {
          setUser(CURR_UID)
          history('/submit')
        } else {
          history('/login')
        }
      })
    } else {
      history('/login')
    }
  }, [])

  return (
    <>
    {user ? (
      <AddBlogs />
    ) : (
      <div className='route container'>
        <p>Please wait...</p>
      </div>
    )}
    </>
  )
}