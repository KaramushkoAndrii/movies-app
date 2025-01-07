import { useState } from "react";

const Search = ({searchValue}) => {

    const [handleSearch, setHandleSearch] = useState('');
    const [typeOfSearch, setTypeOfSearch] = useState('all')

    const searchFilm = (e) => {
        setHandleSearch(e.target.value)
    }

    const handleTypeChange = (e) => {
        const selectedType = e.target.value;
        setTypeOfSearch(selectedType);
        searchValue(handleSearch, selectedType);
    }

    const handleSubmit = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchValue(handleSearch, typeOfSearch)
        }
    }
    return (
        <div className="row">
            <div className="col s12">
                <div className="input-field">
                    <input className="validate"
                           placeholder="Search"
                           type="search" 
                           value={handleSearch}
                           onChange={searchFilm}
                           onKeyDown={handleSubmit}
                    />
                    <button className="btn btn-search" onClick={() => searchValue(handleSearch, typeOfSearch)}>Search</button>
                </div>
            </div>
            <div>
                <label>
                    <input className="with-gap" name="type" type="radio" value="all" onChange={handleTypeChange} checked={typeOfSearch === 'all'}/>
                    <span>All</span>
                </label>
                <label>
                    <input className="with-gap" name="type" type="radio" value="movie" onChange={handleTypeChange} checked={typeOfSearch === 'movie'}/>
                    <span>Only movies</span>
                </label>
                <label>
                    <input className="with-gap" name="type" type="radio" value="series" onChange={handleTypeChange} checked={typeOfSearch === 'series'}/>
                    <span>Only  series</span>
                </label>
            </div>
        </div>
    )
}

export default Search;