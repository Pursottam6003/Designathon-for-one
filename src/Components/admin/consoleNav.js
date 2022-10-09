import { NavLink } from "react-router-dom"

export const ConsoleNav = () => {
    return (
        <nav className="console-nav">
            <ul className="nav-items">
                <li className="nav-item"><NavLink exact to='./'>Dashboard</NavLink></li>
                <li className="nav-item"><NavLink to='./submissions'>Submissions</NavLink></li>
                <li className="nav-item"><NavLink to='./draft'>Draft an issue</NavLink></li>
                <li className="nav-item"><NavLink to='./database'>Database</NavLink></li>
            </ul>
        </nav>
    )
}