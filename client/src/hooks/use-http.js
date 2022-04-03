import axios from 'axios';
import { useState, useEffect } from 'react';

const useHttp = (collection) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://ghibliapi.herokuapp.com/${collection}`)
            .then(setIsLoading(true))
            .then(value => new Promise(resolve => {
                setTimeout(() => {
                    resolve(value);
                }, 500)
            }))
            .then(res => {
                console.log(res.data);
                setData(res.data);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    return {
        isLoading,
        data
    }
}

export default useHttp;