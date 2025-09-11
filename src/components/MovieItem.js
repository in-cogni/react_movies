import React from 'react';

const MovieItem = ({ movie, displayType }) => {
    return (
        <div className={`movie-item ${displayType === 'tile' ? 'tile' : 'list'}`}>
            <img 
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150x200?text=No+Image'} 
                alt={movie.Title}
                className="movie-poster"
            />
            <div className="movie-info">
                <h3 className="movie-title">{movie.Title}</h3>
                <p className="movie-year">{movie.Year}</p>
                <p className="movie-type">{movie.Type}</p>
            </div>
        </div>
    );
};

export default MovieItem;