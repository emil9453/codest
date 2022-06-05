import React from 'react'
import styles from './App.module.css'
import { MovieList, Form, useMovieList } from './components'

const App = () => {
  const { movies, addMovie, toggleMovieIsWatched } = useMovieList()
  const handleFormSubmit = (title, image, comment) => {
    addMovie(title, image, comment, false)
  }

  return (
    <div className={styles.App}>
      <h1>Codest Movies!</h1>
      <h1>Add movie!</h1>
      <Form onSubmit={handleFormSubmit} />

      <h1>Watchlist:</h1>
      <MovieList movies={movies} handleMovieClick={toggleMovieIsWatched} />

      <h1>Already watched:</h1>
      <MovieList movies={movies} handleMovieClick={toggleMovieIsWatched} showOnlyWatched/>
    </div>
  )
}
export default App
