import React from 'react';

//stateless functional component
const Navbar = ({ children }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="ms-4">
                {children}
            </div>
        </nav>
    );
}

export default Navbar;