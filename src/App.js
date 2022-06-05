import React from 'react';
import './App.css';

import { addWatchedMovie, add, removeWatchedMovie, getWatchedMovies, getAllMovies } from './index.js';

/**
 * It is better to move Movie component to separate file.
 * Do not forget to use key property in Movie component.
 * Try map function instead of forEach.
 */
const getMoviesComponents = (movies) => {
  var components = [];

  movies.forEach(function(movie) {
    components.push(
      <div className="all">
        <div>
          {/**
           * It is not a good idea to use height property in img tag.
           * You may add additional styling in the future, so let's move it to css file. 
           * img elements must have an alt prop
           */}
          <img src={movie.image} height="100px" />
        </div>
        {/**
         * No need to wrap "a" tag in a span.
         */}
        <span>
          {/*
          * use href="/#" insted of href="#" or convert "a" tag to a button.
          * movie-watched class is not defined anywhere.
          */}
          <a className="movie-watched" href="#" onClick={function() { addWatchedMovie(movie.title, movie.comment, movie.image) }}>
            {movie.title}
          </a> 
        </span>
        <br />
        <span> 
          {movie.comment}
        </span>
        <br />
        <br />
      </div>
    )
  })

  return components;
}

function getWatchedMoviesComponents(movies) {
  var components = [];

  movies.forEach(function(movie) {
    components.push(movie && (
      <div className="watched">
        <div>
          <img src={movie.image} height="100px" />
        </div>
        <span>
          <a className="movie-watched" href="#" onClick={function() { removeWatchedMovie(movie.title) }}>
            {movie.title}
          </a>
        </span>
        <br />
        <span>
          {movie.comment}
        </span>
        <br />
        <br />
      </div>
    ))
  })

  return components;
}

/**
 * props are unused here. Need to remove them.
 * Use useState hook for title, image and comment. Using global variables is not a good idea.
 * */
function App(props) {
  return (
    <div className="App">
      <h1>Codest Movies!</h1>
      <h1>Add movie!</h1>
      <b>TITLE:<br /><input type="text" onChange={function(e) { title = e.target.value; }} /></b><br />
      <b>IMAGE URL:<br /><input type="text" onChange={function(e) { image = e.target.value; }} /></b><br />
      <b>COMMENT:<br /><input type="text" onChange={function(e) { comment = e.target.value; }} /></b><br />
      {/**
       * Remove "e" variable. It is not used.
       * Use button instead of a input tag.
       * arguments passed wrong. Should be (title, comment, image)
       */}
      <input type="button" onClick={function(e) { add(title, image, comment); }} value="ADD MOVIE" />

      <h1>Watchlist:</h1>
      {getMoviesComponents(getAllMovies())}

      <h1>Already watched:</h1>
      {getWatchedMoviesComponents(getWatchedMovies())}
    </div>
  );
}

var title = '';
var image = '';
var comment = '';

export default App;
