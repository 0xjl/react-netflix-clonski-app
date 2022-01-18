/* import useState from library  */
import React, { useState, useEffect } from 'react'
import axios from './axios';
import './row.css';

const base_url = `https://image.tmdb.org/t/p/original/`;

/* pass title in the props and call in to render */
function Row({ title, fetchUrl, isLargeRow }) {
    /* use hook called useState and make movies stateful */
    const [movies, setMovies] = useState([]);

/* A snippet of code which runs based on specific condition/variable */
useEffect(() => {
    /* if [], run once when the row loads and dont run again */
async function fetchData() {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results)
    return request;
}
fetchData();
}, [fetchUrl]);
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
            {/* rows posters */}
            {movies.map(movie => (
                <img 
                    key={movie.id} /* optimizes the data and updates only was is required */
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} 
                />
            ))}
            </div>
        </div>
    )
}

export default Row;
