import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import useHttp from '../../../hooks/use-http';
import './FilmStory.css';

import Characters from '../Characters/Characters';

const FilmStory = (props) => {
    const { id } = useParams();
    const { isLoading, data } = useHttp('films', id)
    const [filmData, setFilmData] = useState([]);

    // useEffect(() => {
    //     if (data.people && !isLoading) {
    //         let promise = axios.all(data.people.map((endpoint) => axios(endpoint))).then((res) => {
    //             console.log(res.data)
    //             setFilmData(res.data)
    //         })
    //         console.log(filmData)
    //     };
    // }, [])

    // console.log(filmData)

    let arr = [];
    const characters = data.people ? data.people.map((person) => arr.push(person)) : null;
    // console.log(arr)

    const fetchChars = () => {
        Promise.all(arr.map((endpoint) => axios(endpoint))).then((res) => {
            console.log(res[0].data)
            setFilmData(res[0].data)
        })
        console.log(filmData)
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
                    <h2>Characters</h2>
                    {JSON.stringify(data.people)} <br />
                    **** <br />
                    <button onClick={fetchChars}>Characters</button> <br /><br />
                    {/* {filmData ? JSON.stringify(filmData): null} */}
                    <Characters data={filmData} />
                    {/* {filmData
                        ? <div>
                            <p>{filmData.name}</p>
                            <p>{filmData.gender}</p>
                            <p>{filmData.age}</p>
                            <p>{filmData.eye_color}</p>
                            <p>{filmData.hair_color}</p>
                        </div>
                        : null} */}
                    {/* {filmData ? filmData.map((data) => {
                        <p>{data.data}</p>
                    }) : null} */}
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