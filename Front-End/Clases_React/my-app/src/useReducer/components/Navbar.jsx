import React, {useReducer} from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../actions/authAction'
import { inicialState, loginReducer } from '../reducers/loginReducer'


const Navbar = () => {
    const [state, dispatch] = useReducer(loginReducer, inicialState)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">UseReducer</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Counter</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <button className="btn btn-outline-success" type ="submit" onClick = {()=> dispatch(logout)} >Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
