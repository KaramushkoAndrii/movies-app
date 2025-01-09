import { useState, useEffect } from "react";


import MovieList from "../components/MoviesList/MoviesList";
import Search from "../components/Search/Search";
import Preloader from "../components/Preloader/Preloader";

const API_KEY = process.env.REACT_APP_API_KEY;
const MAIN__API = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`

const Main = () => {

    const [filmsList, setFilmsList] = useState([]);
    const [filmSearch, setFilmSearch] = useState('Batman');
    const [type, setType] = useState('all');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      if (filmSearch.trim() === '') return;
      setIsLoading(true)

      fetch(`${MAIN__API}${filmSearch}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => {
            setFilmsList(data.Search || []);
            setIsLoading(false);
        })
        .catch((err) => console.error('Fetch error: ', err))
    }, [filmSearch, type]);


    const handleSearch = (searchValue, searchType) => {
        setFilmSearch(searchValue || 'Batman');
        setType(searchType);
    }


    return (
        <main className="container content">
            <Search searchValue={handleSearch} initialSearch={filmSearch}/>
            {isLoading ? <Preloader /> : (<MovieList movies={filmsList}/>)}
        </main>
    )
}

export default Main;