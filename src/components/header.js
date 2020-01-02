import React from 'react';
import { Link } from 'gatsby';

const Header = () =>
    <header>
        <h1>Manuele's Blog</h1>
        <nav>
            <ul>
                <li><Link to='/'>Homepage</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    </header>
    

export default Header;