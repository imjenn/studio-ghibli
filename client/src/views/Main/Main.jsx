import './styles';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className="main-container">
            <div className="main-body">
                <div className="blank"></div>
                <div className="main-film-body">
                    <h2>FILMOGRAPHY</h2>
                    <div className="film-cards">
                        <Link to="/film/58611129-2dbc-4a81-a72f-77ddfc1b1b49" className="card">
                            <h3>My Neighbor Totoro</h3>
                        </Link>
                        <Link to="/film/dc2e6bd1-8156-4886-adff-b39e6043af0c" className="card">
                            <h3>Spirited Away</h3>
                        </Link>
                        <Link to="/film/2baf70d1-42bb-4437-b551-e5fed5a87abe" className="card">
                            <h3>Castle in the Sky</h3>
                        </Link>
                        <Link to="/film/ea660b10-85c4-4ae3-8a5f-41cea3648e3e" className="card">
                            <h3>Kiki's Delivery Service</h3>
                        </Link>
                        <Link to="/film/cd3d059c-09f4-4ff3-8d63-bc765a5184fa" className="card">
                            <h3>Howl's Moving Castle</h3>
                        </Link>
                    </div>
                    <a className="all-films-button" href="/films">View All Films</a>
                </div>
                <div className="main-shop-body">
                    <h2>VIEW SHOP</h2>
                    <div className="main-shop">
                        <div className="main-shop-card">
                            <img src="https://i0.wp.com/ckwai.com/wp-content/uploads/2021/09/313575.png?fit=1000%2C1000&ssl=1" alt="Studio Ghibli sweater" />
                            <h4>Sweaters</h4>
                        </div>
                        <div className="main-shop-card">
                            <img src="https://ae01.alicdn.com/kf/HTB1AOwqdoGF3KVjSZFoq6zmpFXaf/Spirit-Away-totoro-t-shirt-clothes-cartoon-Anime-Japanese-women-tshirt-t-shirt-female-kawaii-Studio.jpg_640x640q80.jpg.webp" alt="Studio Ghibli tee" />
                            <h4>T-Shirts</h4>
                        </div>
                        <div className="main-shop-card">
                            <img src="https://ghibli.store/wp-content/uploads/2020/04/productimage1004821216_2nd.jpg" alt="Studio Ghibli accessories" />
                            <h4>Accessories</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;