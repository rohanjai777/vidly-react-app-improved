import React from "react";

const MoviesFrom = ({ match, history }) => {
  return (
    <div>
      <h1>Movie {match.params.id}</h1>
      <button onClick={() => history.push("/movies")}> Save </button>
    </div>
  );
};

export default MoviesFrom;
