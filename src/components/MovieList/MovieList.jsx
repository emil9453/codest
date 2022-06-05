import React from 'react'
import PropTypes from 'prop-types'
import { Movie } from '../Movie'

export const MovieList = ({
    movies,
    handleMovieClick,
}) => {
  return movies.map(movie => () => <Movie {...movie} onClick={handleMovieClick} />)
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({ Movie }.propTypes, {
      handleMovieClick: PropTypes.func,
  }))
}
