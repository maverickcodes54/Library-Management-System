import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="d-flex">
            {/* Sidebar */}
            <div className={`bg-dark border-end ${collapsed ? 'd-none' : 'd-block'}`} style={{ width: '250px', height: '100vh' }}>
                <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
                    <h5 className="mb-0 text-light">Library Management System</h5>
                    <button className="btn btn-sm btn-outline-light" onClick={() => setCollapsed(true)}>×</button>
                </div>
                <nav className="nav flex-column p-3">
                    <NavLink className="nav-link" to="/home">🏠 Home</NavLink>
                    <NavLink className="nav-link" to="/dashboard">📊 Dashboard</NavLink>
                    <NavLink className="nav-link" to="/books">📚 Books</NavLink>
                    <NavLink className="nav-link" to="/members">👥 Members</NavLink>
                    <NavLink className="nav-link" to="/staff">🧑‍💼 Staff</NavLink>
                </nav>
            </div>

            {/* Toggle button if sidebar is collapsed */}
            {collapsed && (
                <button
                    className="btn btn-outline-primary m-3 position-fixed"
                    onClick={() => setCollapsed(false)}
                >
                    ☰
                </button>
            )}

            {/* Main Content */}
            <div className="flex-grow-1 p-4" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
                <Outlet />
            </div>
        </div>
    );
};

export default Sidebar;
