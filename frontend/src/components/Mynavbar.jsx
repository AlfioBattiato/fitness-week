import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LOGOUT } from '../redux/actions';
import axios from 'axios';

function Mynavbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    const logout = () => {
        axios
            .post('/logout')
            .then(() => {
                dispatch({ type: LOGOUT });
                navigate('/');
            });
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link className="navbar-brand" to="/">CoreCraze</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#footer">Contatti</a>
                        </li>
                        { user?.role === 'guest'&&(
                            <li className="nav-item">
                                  <Link to="/corsiutente/1" className="nav-link">I tuoi corsi</Link>
                            </li>
                        )}
                    </ul>

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                    {user ? (
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item dropdown">

                                <img
                                    src={user.profile_img}
                                    alt="profile_img"
                                    className="img_profile"
                                />
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {user.name}
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={`/dashbord/${user.id}`}>Profile</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><button onClick={logout} className="dropdown-item">Logout</button></li>
                                    {user.role === 'admin' && (
                                        <li>
                                            <Link className="dropdown-item" to="backoffice">BackOffice</Link>
                                        </li>
                                    )}
                                </ul>
                            </li>
                        </ul>
                    ) : (
                        <Link to="/Login" className="nav-link ms-2">Login</Link>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Mynavbar;
