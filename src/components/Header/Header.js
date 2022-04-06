import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <h3>reactRouter practice site | <a href="https://reactrouter.com/docs/en/v6">https://reactrouter.com/docs/en/v6</a> </h3>
            <nav>
                <Link to={"/home"}>Home</Link>
                <Link to={"/orderreview"}>Order Review</Link>
            </nav>
        </div>
    );
};

export default Header;