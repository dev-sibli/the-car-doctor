import React from 'react';
import './Footer.css'

const Footer = () => {
    const currentYear = () => {
        return new Date().getFullYear();
    }
    return (
        <div className='footer'>
            <h2>Footer</h2>
            <p>Copyright &copy; {currentYear()}</p>
        </div>
    );
};

export default Footer;