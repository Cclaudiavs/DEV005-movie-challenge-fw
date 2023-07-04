import React, { useState } from "react";

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

    return (
        <nav>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        className="input"
                        type="text"
                        value={searchKey}
                        onChange={handleInputChange}
                    />
                </label>
                <button className="buscar" type="submit">
                    Buscar
                </button>
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
            </form>
        </nav>
    );
};

export { Header };


