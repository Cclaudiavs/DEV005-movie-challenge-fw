import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';



const Header = ({ onSearch, setSelectedGenre: setSelectedGenreProp }) => {
    const [searchKey, setSearchKey] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("");

    const handleInputChange = (e) => {
        setSearchKey(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchKey);
    };

    const handleGenreChange = (e) => {
        setSelectedGenre(e.target.value);
        setSelectedGenreProp(e.target.value);
    };
    const handleHomeClick = () => {
        window.location.reload();
    };
    return (

        <div>
            <form onSubmit={handleSubmit} className="search-container">
                <label>
                    <input
                        className="input"
                        type="text"
                        value={searchKey}
                        onChange={handleInputChange}
                    />
                </label>

                <button className='buscar' onClick={handleSubmit} >
                    <SearchIcon />
                </button>
                <div className="contSelect">
                    <select
                        className="select"
                        value={selectedGenre}
                        onChange={handleGenreChange}
                    >
                        <option value="">Buscar por género</option>
                        <option value="18">Drama</option>
                        <option value="28">Acción</option>
                        <option value="16">Animación</option>
                        <option value="99">Documental</option>
                        <option value="10751">Familiar</option>
                        <option value="27">Horror</option>
                    </select>
                </div>
                <div className="contVolver">
                    <button className="volver" onClick={handleHomeClick}>
                        <HomeIcon />
                    </button>
                </div>
            </form>
            <div className="titulo">
                <h1>PANGEA</h1>
            </div>
        </div>

    );
};

export { Header };

