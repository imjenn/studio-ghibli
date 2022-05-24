import './styles';
import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../context/cart-context';
import CartDropdown from '../CartDropdown/CartDropdown';

const Nav = (props) => {
    const cartCtx = useContext(CartContext);
    const [openMenu, setOpenMenu] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    }

    const handleMouseOut = () => {
        setIsHovering(false);
    }

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
                // console.log(currentNumber)
                // console.log(item)
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
                    <p
                        onClick={props.onDisplayCart}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        <p>Cart</p>
                        <FontAwesomeIcon
                            className="cart-icon"
                            icon={faCartShopping}
                        />
                        {isHovering && <CartDropdown />}
                        <div className="cart-items-icon">{numOfCartItems}</div>
                    </p>
                </div>
                <div className="menu" onClick={dropMenuHandler}>
                    <FontAwesomeIcon className="menu-icon" icon={faBars} />
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