import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
export default class NavBar extends Component {
    render() {
        return <nav>
            <ul className="nav-bar">
                <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to='/' exact>Home</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to='/Contact'>Contacts</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to='/Rate'>Rate</NavLink></li>
            </ul>
        </nav>
    }
}
