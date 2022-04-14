import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import useHttp from '../../../hooks/use-http';
import './FilmStory.css';

import Characters from '../Characters/Characters';
import arrow from '../../../assets/down-arrow-svgrepo-com.svg';

const FilmStory = (props) => {
    const { id } = useParams();
    const { isLoading, data } = useHttp('films', id)
    const [filmData, setFilmData] = useState([]);
    const [showData, setShowData] = useState(false);

    let arr = [];
    const characters = data.people ? data.people.map((person) => arr.push(person)) : null;

    const fetchChars = () => {
        Promise.all(arr.map((endpoint) => axios(endpoint))).then((res) => setFilmData(res))
        showData ? setShowData(false) : setShowData(true);
    }

    // Time conversion
    const runtime = data.running_time / 60;
    const hour = Math.floor(runtime)
    const min = (runtime - hour).toString().slice(2, 4);

    return (
        <div className="film-story-container">
            <div className="left-container">
                <img src={data.image} alt="Movie cover" />
                <div>
                    <h1>{data.title}</h1>
                    <b>{data.original_title}</b>
                    <p>{hour}h {min}m</p>
                    <ul>
                        <li>Directed by {data.director}</li>
                        <li>Produced by {data.producer}</li>
                    </ul>
                </div>
            </div>
            <div className="right-container">
                <img src={data.movie_banner} alt="Movie banner" />
                <p>{data.description}</p>
                <div>
                    <div className="characters" onClick={fetchChars}>
                        <div className="characters-header">
                            <h2>Characters</h2>
                            <img src={arrow} alt="" />
                        </div>
                        {
                            showData
                                ? <Characters data={filmData} />
                                : null
                        }
                    </div>
                </div>
                <div>
                    <h2>Species</h2>
                </div>
                <div>
                    <h2>Vehicles</h2>
                </div>
            </div>
        </div>
    )
}

export default FilmStory;