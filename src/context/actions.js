import * as actions from './actionTypes';



export function addMovieToWatchlist(movie) {
    return {
        type: actions.ADD_MOVIE_TO_WATCHLIST,
        movie
    }
};

export function removeMovieFromWatchlist(id) {
    return {
        type: actions.REMOVE_MOVIE_FROM_WATCHLIST,
        id
    }
};

export function addMovieToWatched(movie) {
    return {
        type: actions.ADD_MOVIE_TO_WATCHED,
        movie
    }
};

export function moveToWatchlist(movie) {
    return {
        type: actions.MOVE_TO_WATCHLIST,
        movie
    }
};

export function removeFromWatched(id) {
    return {
        type: actions.REMOVE_FROM_WATCHED,
        id
    }
};