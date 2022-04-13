import { useState } from 'react';
import Cart from '../Cart/CartIcon';
import './Nav.css';
import cart from '../../assets/cart.jpeg';
import menu from '../../assets/menu-svgrepo-com.svg'

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const dropMenuHandler = () => {
        if (!openMenu) {
            setOpenMenu(true);
        } else {
            setOpenMenu(false);
        }
    }

    window.addEventListener('mouseup', function(e) {
        var x = document.querySelector('#dropdown-menu');
        if (!document.getElementById('dropdown-menu').contains(e.target)) {
            x.style.display = "none";
        }
    });

    return (
        <nav>
            <a href="/">
                <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/c/ca/Studio_Ghibli_logo.svg/300px-Studio_Ghibli_logo.svg.png" alt="Studio Ghibli logo" />
            </a>
            <div>
                <ul>
                    <li>
                        <a href="/films">Films</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="">Shop</a>
                    </li>
                    <li>
                        <a href="">Music</a>
                    </li>
                </ul>
                <div className="nav-cart">
                    <a href="/register">Login/Register</a>
                    <p>
                        <Cart />
                        <img src={cart} alt="" />
                    </p>
                </div>
                <div className="menu" onClick={dropMenuHandler}>
                    <img
                        src={menu}
                        alt="hamburger menu icon"
                    />
                </div>
            </div>
            {
                openMenu &&
                <div id="dropdown-menu">
                    <ul>
                        <li>Films</li>
                        <li>About</li>
                        <li>Shop</li>
                        <li>Lofi</li>
                        <li>Login/Register</li>
                    </ul>
                </div>
            }
        </nav>
    )
}

export default Nav;