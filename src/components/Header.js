import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={{ padding: '1rem', backgroundColor: '#f4f4f4' }}>
            <nav>
                <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
