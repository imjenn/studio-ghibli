import Card from '../../../views/Card/Card';
import './OneFilm.css';

const OneFilm = (props) => {
    return (
        <Card>
            <div className="film-cover-image">
                <img src={props.image} alt="" />
            </div>
            <h2>{props.title}</h2>
            <h3>{props.originalTitle}</h3>
        </Card>
    )
}

export default OneFilm;