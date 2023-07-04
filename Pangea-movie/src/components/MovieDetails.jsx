import React, { useEffect, useState } from "react";
import axios from 'axios';
import apiKey from "./Api";
import { useParams } from 'react-router-dom'; // Importa el hook useParams

const MovieDetails = () => {
    const { id } = useParams(); // Usa el hook useParams para acceder al parámetro "id"
    const [movie, setMovie] = useState(null);

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
        <div>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
        </div>
    );
}

export default MovieDetails;