import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer__section">
                <h4>Explore</h4>
                <ul>
                    <li>Home</li>
                    <li>Collections</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="footer__section">
                <h4>Visit</h4>
                <ul>
                    <li>Museum</li>
                    <li>Stores</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;