import { NavLink } from "react-router-dom"

export const ConsoleNav = () => {
    return (
        <nav className="console-nav">
            <ul className="nav-items">
                <li className="nav-item"><NavLink to='./'>Submissions</NavLink></li>
                <li className="nav-item"><NavLink to='./draft'>Draft</NavLink></li>
            </ul>
        </nav>
    )
}