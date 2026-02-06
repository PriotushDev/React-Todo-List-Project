import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
            <div className="container">
                {/* Brand */}
                <Link className="navbar-brand fw-bold" to="/">
                    TodoPostsApp
                </Link>

                {/* Toggler for mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Nav links */}
                <div className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav ms-auto gap-2">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    isActive
                                        ? "nav-link active fw-semibold"
                                        : "nav-link"
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/todos"
                                className={({ isActive }) =>
                                    isActive
                                        ? "nav-link active fw-semibold"
                                        : "nav-link"
                                }
                            >
                                Todos
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/posts"
                                className={({ isActive }) =>
                                    isActive
                                        ? "nav-link active fw-semibold"
                                        : "nav-link"
                                }
                            >
                                Posts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
