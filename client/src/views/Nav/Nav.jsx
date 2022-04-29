import { useContext, useState } from 'react';
import Cart from '../Cart/Cart';
import './Nav.css';
import cart from '../../assets/cart.jpeg';
import menu from '../../assets/menu-svgrepo-com.svg'
import CartContext from '../../context/cart-context';

const Nav = (props) => {
    const cartCtx = useContext(CartContext);
    const [openMenu, setOpenMenu] = useState(false);

    const dropMenuHandler = () => {
        if (!openMenu) {
            setOpenMenu(true);
        } else {
            setOpenMenu(false);
        }
    }

    window.addEventListener('mouseup', function (e) {
        var x = document.querySelector('#dropdown-menu');
        if (!document.getElementById('dropdown-menu').contains(e.target)) {
            x.style.display = "none";
        }
    });

    const numOfCartItems = (
        cartCtx.items
        ? cartCtx.items.reduce((currentNumber, item) => {
            console.log(currentNumber)
            console.log(item)
            return currentNumber + item.amount;
        }, 0)
        : 0
    );

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
                        <a href="/shop">Shop</a>
                    </li>
                    <li>
                        <a href="/music">Music</a>
                    </li>
                </ul>
                <div className="nav-cart">
                    <a href="/register">Login/Register</a>
                    <p onClick={props.onDisplayCart}>
                        <p>Cart</p>
                        <img src={cart} alt="shopping cart icon" />
                        <div className="cart-items-icon">{numOfCartItems}</div>
                    </p>
                </div>
                <div className="menu" onClick={dropMenuHandler}>
                    <img
                        src={menu}
                        alt="hamburger menu icon"
                    />
                    <div>{numOfCartItems}</div>
                </div>
            </div>
            {
                openMenu &&
                <div id="dropdown-menu">
                    <ul>
                        <li>
                            <a href="/films">Films</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/shop">Shop</a>
                        </li>
                        <li>
                            <a href="/music">Music</a>
                        </li>
                        <li>
                            <a href="/register">Login/Register</a>
                        </li>
                    </ul>
                </div>
            }
        </nav>
    )
}

export default Nav;