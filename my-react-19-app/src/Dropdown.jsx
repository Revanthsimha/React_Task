import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Dropdown = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li
            className="chr-header-v3__nav-li dropdown"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div
                onClick={toggleDropdown}
                className="dropdown-toggle"
                style={{ display: 'flex', alignItems: 'center' }}
            >
                {title} <i className="fas fa-chevron-down" style={{ marginLeft: '5px' }}></i>
            </div>
            {isOpen && (
                <ul className="dropdown-menu">
                    {items.map((item, index) => (
                        <li key={index}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) => isActive ? 'selected-link' : undefined}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default Dropdown;
