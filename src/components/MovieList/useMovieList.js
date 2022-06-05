import { useState } from 'react'

const defaultMovieList = [
  {
    title: 'The Avengers',
    image: 'http://d21lz9b0v8r1zn.cloudfront.net/wp-content/uploads//2012/03/detail.jpg',
    comment: 'New York blows up in this!',
    isWatch: false
  },
  {
    title: 'Dark City',
    image: 'https://i.chzbgr.com/full/5569379584/hA96709E0/',
    comment: 'This looks mysterious. Cool!',
    isWatch: false
  },
  {
    title: 'Hot Tub Time Machine',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7vNmphIcVhEcybvSvMgbTkV6EE2twHBNanKvgDx3ZS7Ivn6Dtg',
    comment: 'Someone said this was fun. Maybe!',
    isWatch: false
  }
];

const getMoviesFromLocalStorage = () => {
  const movies = localStorage.getItem('movies')
  if (movies) {
    try {
      return JSON.parse(movies)
    } catch (e) {
      return []
    }
  }
  return defaultMovieList
}

export const useMovieList = () => {
  const [movies, setMovies] = useState(getMoviesFromLocalStorage())

  const addMovie = (title, description, image, isWatched) => {
    const movie = {
      title,
      description,
      image,
      isWatched
    }
    setMovies([...movies, movie])
  }

  const toggleMovieIsWatched = (title, isWatched) => {
    setMovies(
      movies.map(movie => {
        if (movie.title === title) {
          return {
            ...movie,
            isWatched
          }
        }
        return movie
      })
    )
  }

  return {
    movies,
    addMovie,
    toggleMovieIsWatched
  }
}
