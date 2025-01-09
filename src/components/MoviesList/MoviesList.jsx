
import MovieCard from '../MovieCard/MovieCard';



const MovieList = ({movies = []}) => {

    return (
        <ul className='movies'>
            {movies.length ? movies.map(item => (
                <MovieCard key={item.imdbID} {...item}/>       
            )) : <h4>Nothing not found</h4>}
        </ul>
    )
}

export default MovieList;