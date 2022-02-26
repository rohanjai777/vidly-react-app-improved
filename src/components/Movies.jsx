import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService.js";
import Like from "./common/like";
import Pagination from "./common/Pagination";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4
  };

  handleDeleteMovie = (id) => {
    let remainingMovies = this.state.movies.filter((m) => m._id !== id);
    this.setState({ movies: remainingMovies });
  };

  handleLike = (movie) => {
    let resetMovies = [...this.state.movies];
    let index = resetMovies.indexOf(movie);
    resetMovies[index] = { ...movie };
    resetMovies[index].liked = !resetMovies[index].liked;
    this.setState({ movies: resetMovies });
  };

  render() {
    let { length: count } = this.state.movies; // renaming destructured object as count
    if (count === 0) return <p>There are no movies</p>;

    return (
      <>
        <p> Showing {count} in database </p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th>Like</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => {
              return (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.handleDeleteMovie(movie._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        />
      </>
    );
  }
}

export default Movies;
