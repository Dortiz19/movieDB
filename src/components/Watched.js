import React from 'react';
import {MovieCard} from './MovieCard';
import { connect } from 'react-redux';


const Watched = () => {

    return(
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <div className="heading">
                        <h1>Watched Movies</h1>
                    </div>
                </div>

                {this.props.watched > 0 ? (
                    <div className="movie-grid">
                    {this.props.watched.map(movie => (
                        <MovieCard movie={movie} type="watched" />
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
        watched: state.watched
    };
};

export default connect(mapStateToProps)(Watched);