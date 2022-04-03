import { useEffect, useState } from 'react';
import './FilmList.css';
import search from '../../../assets/search-icon.png';
import OneFilm from '../OneFilm/OneFilm';
import useHttp from '../../../hooks/use-http';

const FilmList = (props) => {
    const [films, setFilms] = useState([]);
    const [filteredFilms, setFilteredFilms] = useState([]);

    const { isLoading, data } = useHttp('films');

    const loadingMessage = isLoading ? <p>Loading</p> : null;

    useEffect(() => {
        if (data !== null) {
            setFilms(data);
            setFilteredFilms(data);
        }
    }, [data]);

    const filterHandler = (e) => {
        const keyword = e.target.value;
        console.log(keyword);

        if (keyword !== '') {
            setFilteredFilms(
                films.filter((film) => {
                    return film.title.toLowerCase().includes(keyword.toLowerCase());
                })
            )
        } else {
            setFilteredFilms(films);
        }
    }

    const filmList = filteredFilms.map((film) => {
        return (
            <OneFilm
                key={film.id}
                title={film.title}
                image={film.image}
                originalTitle={film.original_title}
                desscription={film.desscription}
            />
        )
    })

    return (
        <>
            <div className="search-bar">
                <img src={search} alt=""/>
                <input
                    type="text"
                    placeholder="Search for a film"
                    onChange={filterHandler}
                />
            </div>
            {loadingMessage}
            <div className="film-list">
                {filmList}
            </div>
        </>
    )
}

export default FilmList;