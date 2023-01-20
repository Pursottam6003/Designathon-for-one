import React, { useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import { ConsoleNav } from "../Components/admin/consoleNav"
import { Draft } from "../Components/admin/draft"
import { Submissions } from "../Components/admin/submissions"

export const AdminConsole = () => {
  const history = useNavigate();
  useEffect(() => {
    history('./');
  }, []);

  return (
    <div className="admin-portal route">
      <div className="admin-view">
        <aside>
          <ConsoleNav />
        </aside>
        <main className="main-body">
          <Routes>
            <Route path="/" element={<Submissions />} />
            <Route path="draft" element={<Draft />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}