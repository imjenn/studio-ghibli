import Cart from '../Cart/CartIcon';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/c/ca/Studio_Ghibli_logo.svg/300px-Studio_Ghibli_logo.svg.png" alt="Studio Ghibli logo" />
            <div>
                <ul>
                    <li>
                        <Link to="/films">Films</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>Shop</li>
                </ul>
                <div className="nav-cart">
                    <a href="">Login/Register</a>
                    <p><Cart /></p>
                </div>
            </div>
        </nav>
    )
}

export default Nav;