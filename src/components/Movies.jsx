import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService.js";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./MoviesTable";
import Pagination from "./common/Pagination";
import Paginate from "./utils/Paginate";
import ListGroup from "./common/ListGroup";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    selectedGenre: null
  };

  componentDidMount = () => {
    // set values here, until data comes from server
    const genres = [{ _id: "", name: "All movies" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
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

  handlePageChange = (current) => {
    this.setState({ currentPage: current });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {
    let { length: count } = this.state.movies; // renaming destructured object as count
    if (count === 0) return <p>There are no movies</p>;
    const { movies, pageSize, currentPage, genres, selectedGenre } = this.state;

    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? movies.filter((m) => m.genre._id === selectedGenre._id)
        : movies;
    const moviesOnPage = Paginate(filteredMovies, currentPage, pageSize);
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={selectedGenre}
          />
        </div>
        <div className="col">
          <p> Showing {filteredMovies.length} in database </p>
          <MoviesTable
            movies={moviesOnPage}
            onLike={this.handleLike}
            onDelete={this.handleDeleteMovie}
          />
          <Pagination
            itemsCount={filteredMovies.length}
            pageSize={this.state.pageSize}
            onPageChange={this.handlePageChange}
            currentPage={this.state.currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
