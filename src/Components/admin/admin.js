import React, { Component } from "react"
import { Routes, Route } from "react-router-dom"
import { ConsoleNav } from "./consoleNav"
import { Database } from "./database"
import { Dashboard } from "./dashboard"
import { Draft } from "./draft"
import { Submissions } from "./submissions"

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