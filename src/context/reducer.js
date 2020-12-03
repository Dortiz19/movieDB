import * as actions from './actionTypes';

export const initialState = {
    watchlist: [],
    watched: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.ADD_MOVIE_TO_WATCHLIST:
            return {
                ...state,
                watchlist: [action.movie, ...state.watchlist]
            };
        case actions.REMOVE_MOVIE_FROM_WATCHLIST:
            return {
                ...state,
                watchlist: state.watchlist.filter(
                    movie => movie.id !== action.id)
            }
        case actions.ADD_MOVIE_TO_WATCHED:
            return {
                ...state,
                watchlist: state.watchlist.filter(
                    (movie) => movie.id !== action.id
                ),
                watched: [action.movie, ...state.watched]
            };
        case actions.MOVE_TO_WATCHLIST:
            return {
                ...state,
                watched: state.watched.filter(movie => movie.id !== action.id),
                watchlist: [action.movie, ...state.watchlist]
            };
        case actions.REMOVE_FROM_WATCHED:
            return {
                ...state,
                watched: state.watched.filter(movie => movie.id !== action.id),
            };
        default:
            return state;

    }
};