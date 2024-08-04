import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import navbarLogo from "./assets/chrome-logo.svg";

const Sidebar = ({ closeSidebar, featuresItems, supportItems }) => {
    return (
        <div className="sidebar-wrapper">
            <div className="sidebar">
                <div className="sidebar-content">
                    <NavLink to="/" className="sidebar-logo">
                        <img src={navbarLogo} alt="Logo" />
                        <span>chrome</span>
                    </NavLink>
                    <NavLink to="/" className="sidebar-link">Home</NavLink>
                    <NavLink to="/The Browser by Google" className="sidebar-link">The Browser by Google</NavLink>
                    <div className="sidebar-dropdown">
                        <button className="sidebar-dropdown-btn">Features <i className="fas fa-chevron-down"></i></button>
                        <div className="sidebar-dropdown-content">
                            {featuresItems.map((item, index) => (
                                <NavLink key={index} to={item.path} className="sidebar-link">{item.label}</NavLink>
                            ))}
                        </div>
                    </div>
                    <div className="sidebar-dropdown">
                        <button className="sidebar-dropdown-btn">Support <i className="fas fa-chevron-down"></i></button>
                        <div className="sidebar-dropdown-content">
                            {supportItems.map((item, index) => (
                                <NavLink key={index} to={item.path} className="sidebar-link">{item.label}</NavLink>
                            ))}
                        </div>
                    </div>
                    <button className="get-chrome-btn">Get Chrome</button>
                </div>
            </div>
            <button className="close-btn" onClick={closeSidebar}>
                <i className="fas fa-times"></i>
            </button>
        </div>
    );
};

export default Sidebar;
