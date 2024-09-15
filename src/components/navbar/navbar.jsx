import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/listAnime">
                AnimeList
                </Link>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/listAnime">
                                Anime
                                </NavLink>
                            </li>
                            <li>
                                <input type="text" className="form-control" id="search" to="/*"/> 
                            </li>
                            <li>
                                <button type="button" className="btn btn-primary">Search</button>
                            </li>
                        </ul>
                        <ul  className="navbar-nav m3">
                            <li>
                                <NavLink className= "nav-link" to="/account" >
                                    Account
                                </NavLink>
                            </li>
                            <li>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

