import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer-section">
                    <h4>Explore</h4>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/films">Films</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Visit</h4>
                    <ul>
                        <li>Museum</li>
                        <li>Stores</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Orders</h4>
                    <ul>
                        <li>Tracking Your Order</li>
                        <li>Shipping &amp; Returns</li>
                        <li>Exchanges</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contact</h4>
                    <ul>
                        <li>FAQs</li>
                        <li>My Account</li>
                        <li>
                            <Link to="/terms">Terms &amp; Conditions</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;