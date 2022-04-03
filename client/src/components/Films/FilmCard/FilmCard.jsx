import './FilmCard.css';

const FilmCard = (props) => {
    return (
        <div className="props-card film">
            {props.children}
        </div>
    )
}

export default FilmCard;