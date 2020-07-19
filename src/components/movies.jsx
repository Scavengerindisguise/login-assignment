import React, { Component } from 'react';
import MenuBar from '../components/navbar';
import { baseUrl } from '../shared/baseUrl';
import moment from 'moment';


class Movies extends Component {
    state = {
        payLoad: {
            "category": "movies",
            "language": "kannada",
            "genre": "all",
            "sort": "voting",
        },
        moviesData: []

    }

    componentDidMount() {
        console.log(JSON.stringify(this.state.payLoad));
        return fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(this.state.payLoad),
            mode: 'cors',
            headers: {
                'content-type': 'application/json',
            }
        }).then(response => response.json())
            .then(movies => {
                console.log(movies)
                const moviesData = [...movies.result];
                this.setState({ moviesData });
            });
    }
    getFormattedDate(movie) {
        const releasedDate = moment.unix(movie.releasedDate).format('DD MMM');
        return releasedDate;
    }

    renderCard() {

        return (
            <div className='container'>
                <div className="row pt-2 justify-content-center">
                    <div className='col-md-5'>
                        {this.state.moviesData.map(movie => {
                            return (
                                <div key={movie._id} className="card mb-3">
                                    <div className="row no-gutters">
                                        <div className="col-md-2 text-center align-self-center">
                                            <i className="fa fa-chevron-up fa-2x" aria-hidden="true"></i>
                                            <br></br>
                                            {movie.voted.length}
                                            <br></br>
                                            <i className="fa fa-chevron-down fa-2x" aria-hidden="true"></i>
                                            <br>
                                            </br>
                                            Votes
                                        </div>
                                        <div className="col-md-4">
                                            <img src={movie.poster} className="card-img" alt={movie.title} />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card-body">
                                                <h5 className="card-title">{movie.title}</h5>
                                                <p className="card-text mb-0"><small className="text-muted">Genre: {movie.genre}</small></p>
                                                <p className="card-text mb-0"><small className="text-muted">Director: {movie.director}</small></p>
                                                <p className="card-text mb-0"><small className="text-muted">Starring: {movie.stars}</small></p>
                                                <p className="card-text mb-0"><small className="text-muted">{movie.language} |  {this.getFormattedDate(movie)} </small></p>
                                                <p className="card-text mb-0"><small className="text-primary">{movie.pageViews} Views | Voted By {movie.voted.length} people</small></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center pb-2">
                                        <div className='col-10'>
                                            <button type="button" className="btn btn-primary btn-block btn-sm mt-2">Watch Trailer</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
    render() {
        console.log(baseUrl);

        return (
            <React.Fragment>
                <MenuBar />
                {this.renderCard()}
            </React.Fragment>
        )
    }
}

export default Movies;