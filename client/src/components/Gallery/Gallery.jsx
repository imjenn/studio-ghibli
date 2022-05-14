import { Link } from 'react-router-dom';

const Gallery = () => {
    return (
        <div>
            <h1>Studio Ghibli Image Gallery</h1>
            <p>All images are provided for free by Studio Ghibli.</p>
            <div>
                <Link to='/gallery/studio-ghibli'>Studio Ghibli</Link>
                <Link to='/'>Ponyo</Link>
                <Link to='/'>The Wind Rises</Link>
            </div>
        </div>
    )
}

export default Gallery;