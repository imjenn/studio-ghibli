import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './FilmList.css';
import search from '../../../assets/search-icon.png';
import soot from '../../../assets/soot.png';
import OneFilm from '../OneFilm/OneFilm';
import useHttp from '../../../hooks/use-http';

const FilmList = (props) => {
    const [films, setFilms] = useState([]);
    const [filteredFilms, setFilteredFilms] = useState([]);
    const [visible, setVisible] = useState(false);

    const { isLoading, data } = useHttp('films', '');

    const loadingMessage = isLoading ? (
        <div className="container">
            <div className="loader">
                <img className="first" src={soot} alt="" />
                <img className="second" src={soot} alt="" />
                <img className="third" src={soot} alt="" />
            </div>
        </div>
    ) : null;

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

    const toggleScroll = () => {
        let scrolled = document.documentElement.scrollTop;
        if (scrolled > 500) {
            setVisible(true);
        } else if (scrolled <= 500) {
            setVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    window.addEventListener('scroll', toggleScroll);

    const filmList = filteredFilms.map((film) => {
        return (
            <Link to={`/film/${film.id}`}>
                <OneFilm
                    key={film.id}
                    title={film.title}
                    image={film.image}
                    originalTitle={film.original_title}
                    desscription={film.desscription}
                />
            </Link >
        )
    })

    return (
        <>
            <div className="search-bar">
                <img src={search} alt="" />
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
            <button
                className="scroll"
                onClick={scrollToTop}
                style={{
                    display: visible
                        ? "inline"
                        : "none",
                }}
            >
                Back to Top
             </button>
        </>
    )
}

export default FilmList;