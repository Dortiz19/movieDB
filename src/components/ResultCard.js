import React from 'react';
import store from '../context/store';
import { addMovieToWatchlist, addMovieToWatched } from '../context/actions';

export const ResultCard = ({movie}) => {

    // let storedMovie = initialState.watchlist.find((o) => o.id === movie.id);
    // let storedMovieWatched = initialState.watched.find((o) => o.id === movie.id);

    // const watchlistDisabled = storedMovie 
    // ? true 
    // : storedMovieWatched
    // ? true
    // : false; 

    // const watchDisabled = storedMovieWatched ? true : false;


    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                    alt={`${movie.title} Poster`} 
                    />
                ) : (
                    <div className="filler-poster"></div>
                )}
            </div>

            <div className="info">
                <div className="header">
                    <h3 className="title">{movie.title}</h3>
                    <h4 className="release-date">
                        {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
                    </h4>
                </div>

                <div className="controls">
                    <button className="btn"
                    // disabled={watchlistDisabled}
                    onClick={() => store.dispatch(addMovieToWatchlist(movie))}
                    >Add to Watchlist</button>
                </div>

                <div className="controls">
                    <button className="btn"
                    // disabled={watchDisabled}
                    onClick={() => store.dispatch(addMovieToWatched(movie))}
                    >Add to Watched</button>
                </div>
            </div>
        </div>
    )
}