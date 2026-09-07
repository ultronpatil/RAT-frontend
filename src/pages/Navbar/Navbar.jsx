import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar({ onLogout }) {
    const navigate = useNavigate();
    return (
        <nav className="navbar">

            {/* Left - Logo */}
            <div className="navbar-left">

                <div className="navbar-logo">
                    R
                </div>

                <div className="navbar-brand">
                    <span className="navbar-brand-name">
                        RAT
                    </span>

                    <span className="navbar-brand-subtitle">
                        Management Portal
                    </span>
                </div>

            </div>

            {/* Center - Navigation */}
            <div className="navbar-navigation">

                <button
    className="navbar-link"
    onClick={() => navigate("/")}
>
    Managed Devices
</button>

                <button
                    type="button"
                    className="navbar-link"
                >
                    Dashboard
                </button>

                <button
                    type="button"
                    className="navbar-link"
                >
                    Reports
                </button>

                <button
                    type="button"
                    className="navbar-link"
                >
                    Users
                </button>

            </div>

            {/* Right - User */}
            <div className="navbar-right">

                <button
                    type="button"
                    className="navbar-icon-button"
                    title="Notifications"
                >
                    <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        <path
                            d="M10 21h4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                        />
                    </svg>

                    <span className="notification-dot"></span>
                </button>

                <div className="navbar-divider"></div>

                <div className="navbar-user">

                    <div className="navbar-avatar">
                        A
                    </div>

                    <div className="navbar-user-details">
                        <span className="navbar-user-name">
                            Admin
                        </span>

                        <span className="navbar-user-role">
                            Administrator
                        </span>
                    </div>

                    <span className="navbar-user-arrow">
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                d="m6 9 6 6 6-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>

                </div>

                <button
                    type="button"
                    className="navbar-logout"
                    onClick={onLogout}
                >
                    Logout
                </button>

            </div>

        </nav>
    );
}

export default Navbar;