import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../../../views/Card/Card';

const Characters = (props) => {
    // const [filmData, setFilmData] = useState([]);
    // console.log(props.data)

    return (
        <Card>
            <div>
                <p>{props.data.name}</p>
                <p>{props.data.gender}</p>
                <p>{props.data.age}</p>
                <p>{props.data.eye_color}</p>
                <p>{props.data.hair_color}</p>
            </div>
        </Card>
    )
}

export default Characters;