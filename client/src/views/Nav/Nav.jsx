import Cart from '../Cart/CartIcon';
import './Nav.css';
import cart from '../../assets/cart.jpeg';

const Nav = () => {
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
                </ul>
                <div className="nav-cart">
                    <a href="/register">Login/Register</a>
                    <p>
                        <Cart />
                        <img src={cart} alt=""/>
                    </p>
                </div>
            </div>
        </nav>
    )
}

export default Nav;