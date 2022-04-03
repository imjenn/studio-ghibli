import FilmCard from '../FilmCard/FilmCard';

const OneFilm = (props) => {
    return (
        <FilmCard>
            <img src={props.image} alt=""/>
            <h2>{props.title}</h2>
            <h3>{props.originalTitle}</h3>
        </FilmCard>
    )
}

export default OneFilm;