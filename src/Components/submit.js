import React, { useEffect } from 'react'
import { AddBlogs } from './addBlogs'
import { useNavigate } from 'react-router-dom'

export const Submit = (props) => {
  let history = useNavigate()
  useEffect(() => {
    const CURR_UID = sessionStorage.getItem('UID')
    if (CURR_UID) {
      history('/submit')
    } else {
      history('/login')
    }
  }, [])

  return (
    <AddBlogs />
  )
}