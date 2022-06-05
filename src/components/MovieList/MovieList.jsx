import React from 'react'
import PropTypes from 'prop-types'
import { Movie } from '../Movie'

export const MovieList = ({ movies, handleMovieClick, showOnlyWatched }) => {
  const getWatchedMovie = movie => movie.isWatched

  const onMovieClick = (title, isWatched) => {
    // Do nothing if the movie is already watched
    if (!showOnlyWatched && isWatched && movies.find(getWatchedMovie)) return
    handleMovieClick(title, !isWatched)
  }

  const renderMovie = movie => <Movie key={movie.title} {...movie} onClick={() => onMovieClick(movie.title, movie.isWatched)} />
  if (showOnlyWatched) return movies.filter(getWatchedMovie).map(renderMovie)
  return movies.map(renderMovie)
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({ Movie }.propTypes, {
      handleMovieClick: PropTypes.func,
      showOnlyWatched: PropTypes.bool
    })
  )
}
