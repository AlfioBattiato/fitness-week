import { useSelector,useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { LOGOUT } from '../redux/actions';
import axios from 'axios';

function Mynavbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => state.user)


    const logout = () => {
        axios
            .post('/logout')
            .then(() => dispatch({ type: LOGOUT }))
            .then(() => navigate('/'));
    };


    return (<>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="/">CoreCraze</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={`/`} className="nav-link">Home</Link>
                        </li>


                        <li className="nav-item">
                            <a className="nav-link" href="#footer">Contatti</a>
                        </li>




                    </ul>

                    {/* search */}
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                    {user ? (
                        (() => {
                            switch (user.role) {
                                case "admin":
                                    return (
                                        <ul className="navbar-nav mb-2 mb-lg-0">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {user.name}
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <button onClick={logout} className="nav-link ms-2">Logout</button>
                                            </ul>
                                        </li>
                                    </ul>
                                    ); 
                                case "guest":
                                    return (
                                        <ul className="navbar-nav mb-2 mb-lg-0">
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    {user.name}
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                                    <li><hr className="dropdown-divider" /></li>
                                                    <button onClick={logout} className="nav-link ms-2">Logout</button>
                                                </ul>
                                            </li>
                                        </ul>
                                    );
                                default:
                                    return null;
                            }
                        })()
                    ) : (
                        <Link to="/Login" className="nav-link ms-2">Login</Link>
                    )}


                </div>
            </div>
        </nav>
    </>)
}
export default Mynavbar