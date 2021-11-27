import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="wrapper">
                <Link to ="/" className="header__store-title">
                    GameStore
                </Link>
            </div>
            <div className="wrapper header__cart-btn-wrapper">
                cart
            </div>
        </div>
    )
}

export default Header;