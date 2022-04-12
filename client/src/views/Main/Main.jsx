import { Link } from 'react-router-dom';
import './Main.css';

const Main = () => {
    return (
        <div className="main-container">
            <div className="main-body">
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
            </div>
        </div>
    )
}

export default Main;