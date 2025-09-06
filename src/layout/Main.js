import React from 'react';
import Preloader from '../components/Preloader.js';
import MovieList from '../components/MovieList.js';
import Search from './Search.js';
import './Main.css';

class Main extends React.Component {
    state = { movies: [] }
    componentDidMount() {
        this.searchMovies('Avengers');
    }
    searchMovies = (searchText) => {
        fetch(`https://omdbapi.com/?apikey=c7b21067&s=${searchText}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ movies: data.Search || [] });
            })
            .catch(error => {
                this.setState({
                    movies: []
                });
                console.error('Ошибка ПРОВЕРКА', error);
            });
    }

    render() {
        return (
            <div className='main'>
                <Search onSearch={this.searchMovies} />
                <div className='wrap'>
                    {
                        this.state.movies.length ? <MovieList movies={this.state.movies} /> : <Preloader />
                    }
                </div>
            </div>
        )
    }
}

export default Main;