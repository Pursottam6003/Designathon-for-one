import React, { useEffect } from 'react'
import { AddBlogs } from './addBlogs'
import { useNavigate } from 'react-router-dom'

export const Submit = (props) => {
    let history = useNavigate()
    useEffect(() => {
      const ADMIN_UID = "ATsAjTnFsRTytg8bWZ02XY3zDaa2"
      const SESSION_UID = sessionStorage.getItem('UID')
      if (SESSION_UID) {
        if (ADMIN_UID === SESSION_UID) {
          history('/admin/')
        } else {
          history('/submit')
        }
      } else {
        history('/login')
      }
    }, [])

    return (
        <AddBlogs />
    )
}