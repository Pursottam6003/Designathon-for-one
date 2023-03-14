import React, { useEffect } from "react"
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import { ConsoleNav } from "../Components/admin/consoleNav"
import { Draft } from "../Components/admin/draft"
import { Submissions } from "../Components/admin/Submissions"

export const AdminConsole = () => {
  const history = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/admin') history('./');
  }, []);

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
            <Route path="/" element={<Submissions />} />
            <Route path="draft" element={<Draft />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}