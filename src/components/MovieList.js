import Movie from './Movie.js';
import MovieItem from './MovieItem';
import './MovieList.css';

// function MovieList(props)
// {
//     const {movies = []} = props;

//     return (
//         <div className='movies'>
//             {
//                 movies.map
//                 (
//                     movie => 
//                     {
//                         return <Movie key={movie.imdbID} {...movie} />
//                     }
//                 )
//             }
//         </div>
//     )
// }
const MovieList = ({ movies, displayType }) => {
    return (
        <div className={`movie-container ${displayType === 'tile' ? 'tile-view' : 'list-view'}`}>
            {movies.map(movie => (
                <MovieItem 
                    key={movie.imdbID} 
                    movie={movie} 
                    displayType={displayType} 
                />
            ))}
        </div>
    );
};

export default MovieList;
