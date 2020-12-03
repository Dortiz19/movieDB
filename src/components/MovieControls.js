import React from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CancelIcon from '@material-ui/icons/Cancel';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import store from '../context/store';
import { removeMovieFromWatchlist, addMovieToWatched, moveToWatchlist, removeFromWatched} from '../context/actions';

export const MovieControls = ({ movie, type }) => {
   

    return (
        <div className="inner-card-controls">
            {type === 'watchlist' && (
                <>
                    <button className="ctrl-btn"
                    onClick={() => store.dispatch(addMovieToWatched(movie))}
                    >
                        <VisibilityIcon />
                    </button>

                    <button className="ctrl-btn"
                        onClick={() => store.dispatch(removeMovieFromWatchlist(movie.id))}
                    >
                        <CancelIcon />
                    </button>
                </>
            )}

            {type === 'watched' && (
                <>
                    <button className="ctrl-btn"
                    onClick={() => store.dispatch(moveToWatchlist(movie))}
                    >
                        <VisibilityOffIcon />
                    </button>

                    <button className="ctrl-btn"
                    onClick={() => store.dispatch(removeFromWatched(movie.id))}
                    >
                        <CancelIcon />
                    </button>
                </>
            )}
        </div>
    )
}