import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer__section">
                <h4>Explore</h4>
                <ul>
                    <li>Home</li>
                    <li>Collections</li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
            <div className="footer__section">
                <h4>Visit</h4>
                <ul>
                    <li>Museum</li>
                    <li>Stores</li>
                </ul>
            </div>
            <div className="footer__section">
                <h4>Orders</h4>
                <ul>
                    <li>Tracking Your Order</li>
                    <li>Shipping</li>
                    <li>Returns</li>
                </ul>
            </div>
            <div className="footer__section">
                <h4>Contact</h4>
                <ul>
                    <li>FAQs</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;