import React, { Component, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import { ConsoleNav } from "./consoleNav"
import { Database } from "./database"
import { Dashboard } from "./dashboard"
import { Draft } from "./draft"
import { Submissions } from "./submissions"
import { checkAuth } from "../../config/config"
// import {fs} from 
import { auth } from '../../config/config'
import { getAuth } from "firebase/auth"

let MonthName;
const month = new Date().getMonth();

const BiMonthlyNames = [
  '',
  'JanFeb',
  'MarApril',
  'MayJune',
  'JulyAug',
  'SeptOct',
  'NovDec',
]
if (month === 1 || month === 2) MonthName = BiMonthlyNames[1];
else if (month === 3 || month === 4) MonthName = BiMonthlyNames[2];
else if (month === 5 || month === 6) MonthName = BiMonthlyNames[3];
else if (month === 7 || month === 8) MonthName = BiMonthlyNames[4];
else if (month === 9 || month === 10) MonthName = BiMonthlyNames[5];
else if (month === 11 || month === 12) MonthName = BiMonthlyNames[6];

export const AdminConsole = (props) => {
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
            <Route path="/" element={<Dashboard />} />
            <Route path="submissions" element={<Submissions />} />
            <Route path="draft" element={<Draft />} />
            <Route path="database" element={<Database />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}