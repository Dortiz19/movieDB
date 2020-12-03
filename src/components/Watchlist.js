import React from 'react';
import { MovieCard } from '../components/MovieCard';
import { connect } from 'react-redux';

const Watchlist = () => {

    return(
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <div className="heading">
                        <h1>My Watchlist</h1>
                    </div>
                </div>

                {this.watchlist.length > 0 ? (
                    <div className="movie-grid">
                    {this.watchlist.map(movie => (
                        <MovieCard movie={movie} type="watchlist" />
                    ))}
                </div>
                ) : (
                    <h2 className="no-movies">No movies in your list, add some!</h2>
                )}
                
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        watchlist: state.watchlist
    };
};

export default connect(mapStateToProps)(Watchlist);