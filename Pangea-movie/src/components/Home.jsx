
import { useEffect, useState } from 'react';
import axios from 'axios';
import apiKey from './Api';
import { CardMovie } from './CardMovie';
import { Header } from './Header';


function Home() {
    //variables de estado
    const API_URL = 'https://api.themoviedb.org/3';
    //movie almacenara las peli de la api
    const [movies, setMovies] = useState([]);
    //representara el genero seleccionado
    const [selectedGenre, setSelectedGenre] = useState('');

    const fetchMovies = async () => {
        try {
            //solicitud get a la api
            const response = await axios.get(`${API_URL}/discover/movie`, {

                params: { //parametros que entrega  la api
                    api_key: apiKey,
                    with_genres: selectedGenre,
                }
            });
            const { data } = response;
            console.log(data, 'soy la data');
            setMovies(data.results);
        } catch (error) {
            console.error('Error al obtener los datos de la API:', error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, [selectedGenre]);

    const searchMovie = async (searchKey) => {
        try {
            const response = await axios.get(`${API_URL}/search/movie`, {
                params: {
                    api_key: apiKey,
                    query: searchKey,
                }
            });
            const { data } = response;
            console.log(data.results, 'Resultado de la búsqueda');
            setMovies(data.results);
        } catch (error) {
            console.error('Pelicula no encontrada', error);
        }
    };
    const handleSearch = (searchKey) => {
        searchMovie(searchKey);
    };
    const handleGenreChange = (genre) => {
        setSelectedGenre(genre);
    };


    const renderMovies = () => {
        return movies.map(movie => (
            <CardMovie
                key={movie.id}
                movie={movie}

            />
        ));
    };

    return (
        <div className='container-header'>
            <Header onSearch={handleSearch} setSelectedGenre={handleGenreChange} />

            <div className='container'>


                {renderMovies()}
            </div>
        </div>
    );
}

export default Home;
