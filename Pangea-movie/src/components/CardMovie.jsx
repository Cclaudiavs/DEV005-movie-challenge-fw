
import React from "react";
import Button from '@mui/material/Button';

const CardMovie = ({ movie }) => {
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500/';

    return (
        <div className="movie-card">
            {movie.poster_path ? (
                <img className='movie-img' src={`${IMAGE_PATH}${movie.poster_path}`} alt="poster" />
            ) : (
                <div className='movie-placeholder'>No hay Imagen</div>
            )}
            <h5 className="movie-title">{movie.title}</h5>
            <Button variant="contained">ENTRAR</Button>
        </div>
    );
};

export { CardMovie };
