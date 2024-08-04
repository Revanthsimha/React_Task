import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navbarLogo from "./assets/chrome-logo.svg";
import Dropdown from "./Dropdown.jsx";
import Sidebar from "./Sidebar.jsx";
import "./index.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const featuresItems = [
        { label: "Overview", path: "/features/overview" },
        { label: "Google Address Bar", path: "/features/google-address-bar" },
        { label: "Password Check", path: "/features/password-check" },
        { label: "Use Across Devices", path: "/features/use-across-devices" },
        { label: "Dark Mode", path: "/features/dark-mode" },
        { label: "Tabs", path: "/features/tabs" },
        { label: "Articles For You", path: "/features/articles-for-you" },
        { label: "Extensions", path: "/features/extensions" },
    ];

    const supportItems = [
        { label: "Helpful Tips", path: "/support/helpful-tips" },
        { label: "Chrome Support", path: "/support/chrome-support", icon: "fa-external-link-alt" },
    ];

    return (
        <header id="js-header">
            <div className="chr-header-v3__wrapper shadow-elevation-1">
                <nav>
                    <div className="navbar-content">
                        <div className="navbar-left">
                            <button className="menu-icon" onClick={toggleSidebar}>
                                <i className="fas fa-bars"></i>
                            </button>
                            <img src={navbarLogo} alt="Logo" className="logo" />
                            <span className="navbar-text">chrome</span>
                        </div>
                        <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
                            <li className="chr-header-v3__nav-li">
                                <NavLink
                                    exact
                                    to="/"
                                    className={({ isActive }) => isActive ? "selected-link" : undefined}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="chr-header-v3__nav-li">
                                <NavLink
                                    to="/The Browser by Google"
                                    className={({ isActive }) => isActive ? "selected-link" : undefined}
                                >
                                    The Browser by Google
                                </NavLink>
                            </li>
                            <Dropdown title="Features" items={featuresItems} />
                            <Dropdown title="Support" items={supportItems} />
                        </ul>
                    </div>
                </nav>
            </div>
            {isSidebarOpen && (
                <>
                    <div className="overlay" onClick={toggleSidebar}></div>
                    <Sidebar closeSidebar={toggleSidebar} featuresItems={featuresItems} supportItems={supportItems} />
                </>
            )}
        </header>
    );
};

export default Navbar;
