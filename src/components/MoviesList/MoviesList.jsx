


import MovieCard from '../MovieCard/MovieCard';



const MovieList = ({movies}) => {

    return (
        <ul className='movies'>
            {movies.map(item => (
                <MovieCard key={item.imdbID} {...item}/>       
            ))}
        </ul>
    )
}

export default MovieList;