import React, { Component } from "react"
import { Routes, Route } from "react-router-dom"
import { ConsoleNav } from "./consoleNav"
import { Database } from "./database"
import { Dashboard } from "./dashboard"
import { Draft } from "./draft"
import { Submissions } from "./submissions"

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


export class AdminConsole extends Component {
  render() {
    return (
      <div className="admin-portal route">
        <div className="admin-view container">
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
}