import React, { useEffect, useState } from "react";
import axios from 'axios';
import apiKey from "./Api";
import { useParams } from 'react-router-dom'; // Importa el hook useParams
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const MovieDetails = () => {
    const { id } = useParams(); // hook useParams para acceder al parámetro "id"
    const [movie, setMovie] = useState(null);//maneja estado de la const, seteando el valor de esta
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500/'
    useEffect(() => {
        const fetchMoviesDetails = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}`,
                    {
                        params: {
                            api_key: apiKey,
                        },
                    }
                );
                setMovie(response.data);
            } catch (error) {
                console.error('Error, no hay información:', error)
            }
        }
        fetchMoviesDetails();
    }, [id]);

    if (!movie) {
        return <div>Cargando</div>
    }

    return (
        <div className='sinopsis'>
            <div>
                <Link to='/'>
                    <button className="return">
                        <HomeIcon />
                    </button>
                </Link>
            </div>
            <h2>{movie.title}</h2>
            <img className='imgDetail' src={`${IMAGE_PATH}${movie.poster_path}`} alt="poster" />

            <p>{movie.overview}</p>
        </div>
    );
}

export default MovieDetails;