import { useState, useEffect } from "react";


import MovieList from "../components/MoviesList/MoviesList";
import Search from "../components/Search/Search";
import Preloader from "../components/Preloader/Preloader";

const MAIN__API = 'http://www.omdbapi.com/?apikey=bfebafcc&s='

const Main = () => {

    const [filmsList, setFilmsList] = useState([]);
    const [filmSearch, setFilmSearch] = useState('batman');
    const [type, setType] = useState('');

    useEffect(() => {
      fetch(`${MAIN__API}${filmSearch}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => setFilmsList(data.Search))
    }, [filmSearch, type]);


    const handleSearch = (searchValue, searchType) => {
        setFilmSearch(searchValue);
        setType(searchType);
    }


    return (
        <main className="container content">
            <Search searchValue={handleSearch}/>
            {filmsList?.length ? (<MovieList movies={filmsList}/>) : <Preloader />}
        </main>
    )
}

export default Main;