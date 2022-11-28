import React from 'react'
import {Link, NavLink} from 'react-router-dom';
export const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/inicio">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/buscar">Buscar Restaurante</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/nuevo">Registrar Restaurante</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}
